import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setAlbums, getAlbums, setAlbumsError, setAlbumsLength, fetchAllAlbumsError, fetchAllAlbums } from '../../../actions/albums';
import albums from '../../fixtures/albums';

const createMockStore = configureMockStore([thunk]);

describe('setAlbums', () => {
  it('should set albums', () => {
    const action = setAlbums(albums);

  expect(action).toEqual({
    type: 'GET_ALBUMS',
    albums,
  });
  });
});

describe('setAlbumsError', () => {
  it('should set albums error if an error occurs while setting albums', () => {
    const action = setAlbumsError(albums);
    const expected = {
      type: 'GET_ALBUMS_ERROR',
      message: true
    }

  expect(action).toEqual(expected);
  });
});

describe('setAlbumsLength', () => {
  it('should set albums length', () => {
    const totalAlbums = albums.length;
    const action = setAlbumsLength(totalAlbums);
    const expected = {
      type: 'GET_ALL_ALBUMS',
      totalAlbums
    }

  expect(action).toEqual(expected);
  });
});

describe('fetchAllAlbumsError', () => {
  it('should set albums error if an error occurs while fetching all albums', () => {
    const action = fetchAllAlbumsError(albums);
    const expected = {
      type: 'GET_ALL_ALBUMS_ERROR',
      errorMessage: true
    }

  expect(action).toEqual(expected);
  });
});


describe('Async getAlbums', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('gets albums',async () => {
    nock('https://localhost:8000')
      .get(`jsonplaceholder.typicode.com/albums?_start=${0}&_limit=${5}`)
      .reply(200);


    await store.dispatch(getAlbums(0, 5))
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALBUMS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALBUMS_ERROR');
        expect(store.getActions()[0].message).toEqual(true);
      });
  });
});

describe('Async fetchAllAlbums', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('fetch all albums',async () => {
    nock('https://localhost:8000')
      .get(`jsonplaceholder.typicode.com/albums`)
      .reply(200);


    await store.dispatch(fetchAllAlbums())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALL_ALBUMS');
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});


