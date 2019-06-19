import axios from 'axios';

export const setPhotos = photos => ({
  type: 'GET_PHOTOS',
  photos,
});

export const setPhotoError = () => ({
  type: 'PHOTO_ERROR',
  message: 'Cannot fetch photo'
});

export const getPhotos = (limit = 20, albumId) => async (dispatch) => {
  try {
    const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=0&_limit=${limit}`);
    return dispatch(setPhotos(photos.data));
  } catch (error) {
    return(dispatch(setPhotoError()));
  }
};

