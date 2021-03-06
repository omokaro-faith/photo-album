import axios from 'axios';

export const setUsers = users => ({
  type: 'GET_USERS',
  users,
});

export const setUsersError = () => ({
  type: 'GET_USERS_ERROR',
  message: true
});



export const getUsers = () => async (dispatch) => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return dispatch(setUsers(users.data));
  } catch (error) {
    return(dispatch(setUsersError()));
  }
};

