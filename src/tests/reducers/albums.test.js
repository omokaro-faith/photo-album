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

  test('should throw error message when albums cannot be fetched', () => {
    const albumReducerState = {};
    const action = {
      type: 'ALBUMS_ERROR',
      message: 'Cannot fetch albums'
    }

    const state = albumReducer(albumReducerState, action);
    expect(state).toEqual({
      ...albumReducerState,
      message: 'Cannot fetch albums'
    });
  });
});