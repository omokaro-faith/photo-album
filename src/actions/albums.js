import axios from 'axios'

export const setAlbums = (albums) => ({
 type: 'GET_ALBUMS',
 albums
});

export const getAlbums = () => {
  return async dispatch => {
    try {
     const albums = await axios.get('https://jsonplaceholder.typicode.com/albums')
     return dispatch(setAlbums(albums.data));
    } catch (error) {
      console.log(error);
    }
  }
 };
 