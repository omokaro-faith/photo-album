import axios from 'axios';

export const setAlbums = albums => ({
  type: 'GET_ALBUMS',
  albums,
});

export const getAlbums = (limit = 20) => async (dispatch) => {
  try {
    const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums?_start=0&_limit=${limit}`);
    return dispatch(setAlbums(albums.data));
  } catch (error) {
    console.log(error);
  }
};
