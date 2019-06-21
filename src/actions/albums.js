import axios from 'axios';

export const setAlbums = albums => ({
  type: 'GET_ALBUMS',
  albums,
});

export const setAlbumsError = () => ({
  type: 'GET_ALBUMS_ERROR',
  message: true,
});

export const setAlbumsLength = totalAlbums => ({
  type: 'GET_ALL_ALBUMS',
  totalAlbums,
});

export const fetchAllAlbumsError = () => ({
  type: 'GET_ALL_ALBUMS_ERROR',
  errorMessage: true
});

export const fetchAllAlbums = () => async (dispatch) => {
  try {
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return dispatch(setAlbumsLength(albums.data.length));
  } catch (err) {
    return(dispatch(fetchAllAlbumsError()));
  }
}

export const getAlbums = (start = 0, limit) => async (dispatch) => {
  try {
    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`);
    return dispatch(setAlbums(albums.data));
  } catch (err) {
    return(dispatch(setAlbumsError()));
  }
};
