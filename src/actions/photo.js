import axios from 'axios';

export const setPhotos = photos => ({
  type: 'GET_PHOTOS',
  photos,
});

export const setPhotoError = () => ({
  type: 'GET_PHOTOS_ERROR',
  message: true
});

export const setPhotosLength = totalPhotos => ({
  type: 'GET_ALL_PHOTOS',
  totalPhotos,
});

export const fetchAllPhotosError = () => ({
  type: 'GET_ALL_PHOTOS_ERROR',
  errorMessage: true
});

export const fetchAllPhotos = albumId => async (dispatch) => {
  try {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return dispatch(setPhotosLength(photos.data.length));
  } catch (err) {
    return(dispatch(fetchAllPhotosError()));
  }
}

export const getPhotos = (albumId, start= 0 , limit) => async (dispatch) => {
  try {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`);
    return dispatch(setPhotos(photos.data));
  } catch (err) {
    return(dispatch(setPhotoError()));
  }
};
