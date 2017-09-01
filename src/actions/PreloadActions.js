// import { makeActionCreator } from '../utils';
// import { getAllLocations } from './LocationActions';
import { getExpandedUser } from './UserActions';

// export const PRELOAD_SENDING = 'PRELOAD_SENDING';
// export const preloadSending = makeActionCreator(PRELOAD_SENDING, 'sending');
//
// export const PRELOAD_RECEIVED = 'PRELOAD_RECEIVED';
// export const preloadReceived = makeActionCreator(PRELOAD_RECEIVED, 'data');

export const preload = () => {
  return dispatch => {
    dispatch(getExpandedUser());
  };
};
