import * as api from '../../api';
import { makeActionCreator } from '../../utils';

import { mergeEntities } from './entities';
import { userSchema } from '../schemas';

// ACTIONS

export const EXPANDED_USER_SENDING = 'EXPANDED_USER_SENDING';
export const getExpandedUserSending = makeActionCreator(EXPANDED_USER_SENDING);

export const EXPANDED_USER_RECEIVED = 'EXPANDED_USER_RECEIVED';
export const getExpandedUserReceived = makeActionCreator(EXPANDED_USER_RECEIVED, 'user');

export const getExpandedUser = () => {
  return dispatch => {
    dispatch(getExpandedUserSending());

    api.getExpandedUser()
      .then(user => {
        dispatch(getExpandedUserReceived(user));
        dispatch(mergeEntities(user, userSchema));
      });
  };
};
