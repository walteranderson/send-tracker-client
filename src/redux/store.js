import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import entities from './modules/entities';
import session from './modules/session';
import timer from './modules/timer';

const reducers = combineReducers({
  timer,
  session,
  entities
});

const middlewares = [
  thunk,
  logger
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const configureStore = (initialState) => createStore(reducers, initialState, enhancers);

export default configureStore;
