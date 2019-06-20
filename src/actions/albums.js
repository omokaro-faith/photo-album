import axios from 'axios';
import swal from 'sweetalert';


export const setAlbums = albums => ({
  type: 'GET_ALBUMS',
  albums,
});

export const setAlbumsError = () => ({
  type: 'ALBUMS_ERROR',
  message: 'Cannot fetch albums'
});

export const getAlbums = (limit = 20) => async (dispatch) => {
  try {
    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?_start=0&_limit=${limit}`);
    return dispatch(setAlbums(albums.data));
  } catch (error) {
    swal("An error occured", "Cannot fetch albums", "error", {buttons: { cancel: "Close"}});
    return(dispatch(setAlbumsError()));
  }
};
