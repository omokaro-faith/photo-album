import axios from 'axios';
import swal from 'sweetalert';
import { ERROR_OCCURED } from '../constants/constants';

export const setAlbums = albums => ({
  type: 'GET_ALBUMS',
  albums,
});

export const setAlbumsError = () => ({
  type: 'GET_ALBUMS_ERROR',
  message: 'Cannot fetch albums'
});

export const setAlbumsLength = totalAlbums => ({
  type: 'GET_ALL_ALBUMS',
  totalAlbums,
});

export const fetchAllAlbumsError = () => ({
  type: 'GET_ALL_ALBUMS_ERROR',
  errorMessage: 'Cannot fetch all albums'
});

export const fetchAllAlbums = () => async (dispatch) => {
  try {
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return dispatch(setAlbumsLength(albums.data.length));
  } catch (err) {
    const { error, status, buttons } = ERROR_OCCURED;
    swal(error, 'Cannot fetch all albums', status, {
				buttons,
		});
    return(dispatch(fetchAllAlbumsError()));
  }
}

export const getAlbums = (start = 0, limit) => async (dispatch) => {
  try {
    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`);
    return dispatch(setAlbums(albums.data));
  } catch (err) {
    const { error, status, buttons } = ERROR_OCCURED;
    swal(error, 'Cannot fetch albums', status, {
				buttons,
		});
    return(dispatch(setAlbumsError()));
  }
};
