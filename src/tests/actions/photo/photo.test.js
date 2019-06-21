import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setPhotos, getPhotos, setPhotoError, setPhotosLength, fetchAllPhotosError, fetchAllPhotos } from '../../../actions/photo';
import photos from '../../fixtures/photos';

const createMockStore = configureMockStore([thunk]);

describe('setPhotos', () => {
  it('should set photos', () => {
    const action = setPhotos(photos);

  expect(action).toEqual({
    type: 'GET_PHOTOS',
    photos,
  });
  });
});

describe('setPhotosError', () => {
  it('should set photos error if an error occurs while setting photos', () => {
    const action = setPhotoError(photos);
    const expected = {
      type: 'GET_PHOTOS_ERROR',
      message: 'Cannot fetch photos'
    }

  expect(action).toEqual(expected);
  });
});

describe('setPhotosLength', () => {
  it('should set photos length', () => {
    const totalPhotos = photos.length;
    const action = setPhotosLength(totalPhotos);
    const expected = {
      type: 'GET_ALL_PHOTOS',
      totalPhotos
    }

  expect(action).toEqual(expected);
  });
});

describe('fetchAllPhotosError', () => {
  it('should set photos error if an error occurs while fetching all photos', () => {
    const action = fetchAllPhotosError(photos);
    const expected = {
      type: 'GET_ALL_PHOTOS_ERROR',
      errorMessage: 'Cannot fetch all photos'
    }

  expect(action).toEqual(expected);
  });
});


describe('Async getPhotos', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('gets photos',async () => {
    nock('https://localhost:8000')
      .get('jsonplaceholder.typicode.com/photos?albumId=4&_start=0&_limit=')
      .reply(200);


    await store.dispatch(getPhotos())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_PHOTOS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('GET_PHOTOS_ERROR');
        expect(store.getActions()[0].message).toEqual('Cannot fetch photos');
      });
  });
})

describe('Async fetchAllPhotos', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('fetch all photos',async () => {
    nock('https://localhost:8000')
      .get('jsonplaceholder.typicode.com/photos?albumId=2')
      .reply(200);


    await store.dispatch(fetchAllPhotos(2))
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALL_PHOTOS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('GET_ALL_PHOTOS_ERROR');
        expect(store.getActions()[0].errorMessage).toEqual('Cannot fetch all photos');
      });
  });
});
