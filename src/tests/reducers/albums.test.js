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
      albums
    });
  });

  test('should set all albums', () => {
    const albumReducerState = {};
    const action = {
      type: 'GET_ALL_ALBUMS',
      totalAlbums: albums.length
    }

    const state = albumReducer(albumReducerState, action);
    expect(state).toEqual({
      ...albumReducerState,
      totalAlbums: albums.length
    });
  });

  test('should throw error message when albums cannot be fetched', () => {
    const albumReducerState = {};
    const action = {
      type: 'GET_ALBUMS_ERROR',
      message: 'Cannot fetch albums'
    }

    const state = albumReducer(albumReducerState, action);
    expect(state).toEqual({
      ...albumReducerState,
      message: 'Cannot fetch albums'
    });
  });

  test('should throw error message when all albums cannot be fetched', () => {
    const albumReducerState = {};
    const action = {
      type: 'GET_ALL_ALBUMS_ERROR',
      errorMessage: 'Cannot fetch all albums'
    }

    const state = albumReducer(albumReducerState, action);
    expect(state).toEqual({
      ...albumReducerState,
      errorMessage: 'Cannot fetch all albums'
    });
  });
});