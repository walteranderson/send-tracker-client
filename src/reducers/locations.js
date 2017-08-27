import update from 'immutability-helper';
import {
  LOCATIONS_ALL_SENDING,
  LOCATIONS_ALL_RECEIVED
} from '../actions/LocationActions';

const initialState = {
  sending: false
};

export default (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case LOCATIONS_ALL_SENDING:
      return update(state, {
        sending: { $set: true }
      });
    case LOCATIONS_ALL_RECEIVED:
      return update(state, {
        sending: { $set: false }
      });
    default:
      return state;
  }
};
