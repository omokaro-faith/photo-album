import userReducer from '../../reducers/users';
import users from '../fixtures/users';

describe('usersReducer', () => {
  test('should set up default values', () => {
    const state = userReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
  });
  
  test('should set up users', () => {
    const userReducerState = {};
    const action = {
      type: 'GET_USERS',
      users
    }

    const state = userReducer(userReducerState, action);
    expect(state).toEqual({
      ...userReducerState,
      users: action.users
    });
  });


  test('should throw error message when users cannot be fetched', () => {
    const userReducerState = {};
    const action = {
      type: 'GET_USERS_ERROR',
      message: 'Cannot fetch users'
    }

    const state = userReducer(userReducerState, action);
    expect(state).toEqual({
      ...userReducerState,
      message: 'Cannot fetch users'
    });
  });
});