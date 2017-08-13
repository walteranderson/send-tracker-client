import { combineReducers } from 'redux';
import session from './session';
import locationSearch from './locationSearch';

export default combineReducers({
  session,
  locationSearch
});
