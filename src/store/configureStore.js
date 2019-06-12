import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import albums from '../reducers/albums';
import users from '../reducers/users';

const rootReducer = combineReducers({
  albums,
  users,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 export default () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
