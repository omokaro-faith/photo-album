import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setUsers, getUsers, setUsersError } from '../../../actions/users';
import users from '../../fixtures/users';

const createMockStore = configureMockStore([thunk]);

describe('setUsers', () => {
  it('should set users', () => {
    const action = setUsers(users);

  expect(action).toEqual({
    type: 'GET_USERS',
    users,
    });
  });
});

describe('setUsersError', () => {
  it('should set users error if an error occurs while setting users', () => {
    const action = setUsersError(users);
    const expected = {
      type: 'GET_USERS_ERROR',
      message: true
    }

  expect(action).toEqual(expected);
  });
});

describe('Async getUsers', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('gets users', async () => {
    nock('https://localhost:8000')
      .get('jsonplaceholder.typicode.com/users')
      .reply(200);


    await store.dispatch(getUsers())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_USERS');
        expect(store.getActions()).toMatchSnapshot();
      });
  });
})