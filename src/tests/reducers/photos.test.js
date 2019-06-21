import photoReducer from '../../reducers/photos';
import photos from '../fixtures/photos';

describe('photosReducer', () => {
  test('should set up default values', () => {
    const state = photoReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
  });
  
  test('should set up photos', () => {
    const photoReducerState = {};
    const action = {
      type: 'GET_PHOTOS',
      photos
    }

    const state = photoReducer(photoReducerState, action);
    expect(state).toEqual({
      ...photoReducerState,
      photos: action.photos
    });
  });

  test('should set all photos', () => {
    const photoReducerState = {};
    const action = {
      type: 'GET_ALL_PHOTOS',
      totalPhotos: photos.length
    }

    const state = photoReducer(photoReducerState, action);
    expect(state).toEqual({
      ...photoReducerState,
      totalPhotos: photos.length
    });
  });

  test('should throw error message when photos cannot be fetched', () => {
    const photoReducerState = {};
    const action = {
      type: 'GET_PHOTOS_ERROR',
      message: 'Cannot fetch photo'
    }

    const state = photoReducer(photoReducerState, action);
    expect(state).toEqual({
      ...photoReducerState,
      message: 'Cannot fetch photo'
    });
  });

  test('should throw error message when all photos cannot be fetched', () => {
    const photoReducerState = {};
    const action = {
      type: 'GET_ALL_PHOTOS_ERROR',
      errorMessage: 'Cannot fetch all photos'
    }

    const state = photoReducer(photoReducerState, action);
    expect(state).toEqual({
      ...photoReducerState,
      errorMessage: 'Cannot fetch all photos'
    });
  });
});