import axios from 'axios'

export const setAlbums = (albums) => ({
 type: 'GET_ALBUMS',
 albums
});

export const getAlbums = () => {
 return dispatch => axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
   dispatch(setAlbums(res.data));
})};
