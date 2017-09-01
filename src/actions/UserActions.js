import * as api from '../api';
import { mergeEntities } from './EntityActions';
import { normalize } from 'normalizr';
import { makeActionCreator } from '../utils/makeActions';
import { userSchema } from '../utils/schemas';

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

        const { entities } = normalize(user, userSchema);
        dispatch(mergeEntities(entities));
      });

  };
};
