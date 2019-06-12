import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import albums from '../reducers/albums';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


 export default () => {
  const store = createStore(albums, composeEnhancers(applyMiddleware(thunk)))
  return store;
}
