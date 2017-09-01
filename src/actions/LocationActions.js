import * as api from '../api';
import { mergeEntities } from './EntityActions';
import { normalize } from 'normalizr';
import { locationSchema } from '../utils/schemas';
import { makeActionCreator } from '../utils'

export const LOCATIONS_ALL_SENDING = 'LOCATIONS_ALL_SENDING';
export const getAllLocationsSending = makeActionCreator(LOCATIONS_ALL_SENDING);
export const LOCATIONS_ALL_RECEIVED = 'LOCATIONS_ALL_RECEIVED';
export const getAllLocationsReceived = makeActionCreator(LOCATIONS_ALL_RECEIVED, 'locations');

export const getAllLocations = () => {
  return dispatch => {
    dispatch(getAllLocationsSending());

    api.getAllLocations()
      .then((locations) => {
        dispatch(getAllLocationsReceived(locations));

        const data = normalize(locations, [locationSchema]);
        dispatch(mergeEntities(data.entities));
      });
  };
};
