import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import photo from '../reducers/photo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Store creation
 export default () => {
  const store = createStore(photo, composeEnhancers(applyMiddleware(thunk)))
  return store;
}