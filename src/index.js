import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './utils/registerServiceWorker';
import { getPreload } from './redux/modules/preload';
import Router from './Router';
import './styles/index.css';
import configureStore from './redux/store';

const store = configureStore();

store.dispatch(getPreload());

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
