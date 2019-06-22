import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import usersReducer from '../reducers/users';
import photoReducer from '../reducers/photos'
import { loadState } from './localStorage';

const persistedState = loadState();
const rootReducer = combineReducers({
  albums: albumsReducer,
  users: usersReducer,
  photos: photoReducer,
  persistedState
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 export default () => {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
