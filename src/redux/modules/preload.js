import { getExpandedUser } from './user';

/**
 * Add any actions that should occur on initial page-load.
 */
export const getPreload = () => {
  return dispatch => {
    dispatch(getExpandedUser());
  };
};
