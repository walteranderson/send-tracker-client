import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import './index.scss';
import registerServiceWorker from './utils/registerServiceWorker';
import Router from './Router';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(logger)
));

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
