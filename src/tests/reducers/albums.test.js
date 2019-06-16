import albumReducer from '../../reducers/albums';
import albums from '../fixtures/albums';

describe('albumReducer', () => {
  test('should set up default values', () => {
    const state = albumReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
  });
  
  test('should set up albums', () => {
    const albumReducerState = {};
    const action = {
      type: 'GET_ALBUMS',
      albums
    }

    const state = albumReducer(albumReducerState, action);
    expect(state).toEqual({
      ...albumReducerState,
      albums: action.albums
    });
  });
});