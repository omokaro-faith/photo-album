import configureMockStore from 'redux-mock-store'
import nock from 'nock';
import thunk from 'redux-thunk';
import { setUsers, getUsers } from '../../../actions/users';
import users from '../../fixtures/users';

const createMockStore = configureMockStore([thunk]);

describe('setAlbums', () => {
  it('should set users', () => {
    const action = setUsers(users);

  expect(action).toEqual({
    type: 'GET_USERS',
    users,
    });
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

  it('gets users',async () => {
    nock('https://localhost:8000')
      .get('https://jsonplaceholder.typicode.com/users')
      .reply(200);


    await store.dispatch(getUsers())
      .then(() => {
        expect(store.getActions()[0].type).toEqual('GET_USERS');
        expect(store.getActions()).toMatchSnapshot();
      })
      .catch(() => {
        expect(store.getActions()[0].type).toEqual('USER_ERROR');
        expect(store.getActions()[0].message).toEqual('Cannot fetch Cannot fetch users');
      });
  });
})