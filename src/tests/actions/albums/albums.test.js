import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setAlbums, getAlbums } from '../../../actions/albums';
import albums from '../../fixtures/albums';

const createMockStore = configureMockStore([thunk]);

describe('setAlbums', () => {
  it('should set set albums', () => {
    const action = setAlbums(albums);

  expect(action).toEqual({
    type: 'GET_ALBUMS',
    albums,
  });
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
      .get('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=')
      .reply(200);


    await store.dispatch(getAlbums())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALBUMS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('ALBUMS_ERROR');
        expect(store.getActions()[0].message).toEqual('Cannot fetch albums');
      });
  });
})