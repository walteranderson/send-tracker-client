import * as api from '../api';
import { makeActionCreator } from '../utils'

export const LOCATIONS_ALL_SENDING = 'LOCATIONS_ALL_SENDING';
export const getAllLocationsSending = makeActionCreator(LOCATIONS_ALL_SENDING, 'sending');

export const LOCATIONS_ALL_RECEIVED = 'LOCATIONS_ALL_RECEIVED';
export const getAllLocationsReceived = makeActionCreator(LOCATIONS_ALL_RECEIVED, 'locations');

export const getAllLocations = () => {
  return dispatch => {
    dispatch(getAllLocationsSending(true));

    api.getAllLocations()
      .then((locations) => {
        dispatch(getAllLocationsReceived(locations));
      });
  };
};
