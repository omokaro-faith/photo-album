import axios from 'axios';
import swal from 'sweetalert';

export const setUsers = users => ({
  type: 'GET_USERS',
  users,
});

export const setUsersError = () => ({
  type: 'GET_USERS_ERROR',
  message: 'Cannot fetch users'
});



export const getUsers = () => async (dispatch) => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return dispatch(setUsers(users.data));
  } catch (error) {
    swal("An error occured", "Cannot fetch users", "error", { buttons: { cancel: "Close"}});
    return(dispatch(setUsersError()));
  }
};

