import { combineReducers } from 'redux';
import session from './session';
import timer from './timer';
import entities from './entities';

export default combineReducers({
  timer,
  session,
  entities
});
