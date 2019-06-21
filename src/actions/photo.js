import axios from 'axios';
import swal from 'sweetalert';
import { ERROR_OCCURED } from '../constants/constants';

export const setPhotos = photos => ({
  type: 'GET_PHOTOS',
  photos,
});

export const setPhotoError = () => ({
  type: 'GET_PHOTOS_ERROR',
  message: 'Cannot fetch photos'
});

export const setPhotosLength = totalPhotos => ({
  type: 'GET_ALL_PHOTOS',
  totalPhotos,
});

export const fetchAllPhotosError = () => ({
  type: 'GET_ALL_PHOTOS_ERROR',
  errorMessage: 'Cannot fetch all photos'
});

export const fetchAllPhotos = albumId => async (dispatch) => {
  try {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return dispatch(setPhotosLength(photos.data.length));
  } catch (err) {
    const { error, status, buttons } = ERROR_OCCURED;
    swal(error, 'Cannot fetch all photos', status, {
				buttons,
		});
    return(dispatch(fetchAllPhotosError()));
  }
}

export const getPhotos = (albumId, start= 1 , limit) => async (dispatch) => {
  try {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`);
    return dispatch(setPhotos(photos.data));
  } catch (err) {
    const { error, status, buttons } = ERROR_OCCURED;
    swal(error, 'Cannot fetch photos', status, {
				buttons,
		});
    return(dispatch(setPhotoError()));
  }
};
