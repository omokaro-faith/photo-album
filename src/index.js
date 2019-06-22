import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import './styles/base/base.css';
import configureStore from './store/configureStore';
import AppRoute from './routes/AppRoutes';
import * as serviceWorker from './serviceWorker';
import { saveState } from './store/localStorage';

const store = configureStore();


store.subscribe(throttle(() => {
  saveState({
    albums: store.getState().albums,
    users: store.getState().users,
    photos: store.getState().photos
  });
}, 1000));

const ConnectApp = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
)

ReactDOM.render(<ConnectApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
