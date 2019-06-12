import axios from 'axios'

export const setUsers = (users) => ({
 type: 'GET_USERS',
 users
});

export const getUsers = () => {
 return async dispatch => {
   try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    return dispatch(setUsers(users.data));
   } catch (error) {
     console.log(error);
   }
 }
};
