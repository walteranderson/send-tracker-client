import update from 'immutability-helper';
import {
  LOCATIONS_ALL_SENDING,
  LOCATIONS_ALL_RECEIVED
} from '../actions/LocationActions';

// availableLocations// selectedLocation
// search
// - query
// - isSearching?
const initialState = {
  sending: false,
  all: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case LOCATIONS_ALL_SENDING:
      return update(state, {
        sending: { $set: payload.sending }
      });
    case LOCATIONS_ALL_RECEIVED:
      return update(state, {
        all: { $set: payload.locations }
      });
    default:
      return state;
  }
};
