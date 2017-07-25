import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import registerServiceWorker from './utils/registerServiceWorker';
import Router from './Router';
import reducers from './reducers';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
