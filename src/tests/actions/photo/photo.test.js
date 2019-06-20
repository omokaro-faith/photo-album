import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setPhotos, getPhotos } from '../../../actions/photo';
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
      .get('https://jsonplaceholder.typicode.com/photos?albumId=4&_start=0&_limit=')
      .reply(200);


    await store.dispatch(getPhotos())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_PHOTOS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('PHOTO_ERROR');
        expect(store.getActions()[0].message).toEqual('Cannot fetch photo');
      });
  });
})