import photoReducer from '../../reducers/photos';
import photos from '../fixtures/photos';

describe('albumReducer', () => {
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
});