import { combineReducers } from 'redux';
import session from './session';
import locations from './locations';
import timer from './timer';
import grades from './grades';
import entities from './entities';

export default combineReducers({
  timer,
  session,
  locations,
  grades,
  entities
});
