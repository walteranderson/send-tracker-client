import update from 'immutability-helper';
import moment from 'moment';
import _ from 'lodash';
import {
  makeAction,
  makeActionCreator
} from '../../utils';

// ACTIONS

export const SESSION_START = 'SESSION_START';
export const startSession = () => {
  return makeAction(SESSION_START, {
    startedAt: moment()
  });
};

export const SESSION_END = 'SESSION_END';
export const endSession = () => {
  return makeAction(SESSION_END, {
    finishedAt: moment()
  });
};

export const SESSION_SET_LOCATION = 'SESSION_SET_LOCATION';
export const setLocation = makeActionCreator(SESSION_SET_LOCATION, 'location');

export const SESSION_CLEAR_LOCATION = 'SESSION_CLEAR_LOCATION';
export const clearLocation = makeActionCreator(SESSION_CLEAR_LOCATION);

export const SESSION_SET_GRADESET = 'SESSION_SET_GRADESET';
export const setGradeset = makeActionCreator(SESSION_SET_GRADESET, 'gradeset');


// REDUCER

const initialState = {
  current: {},
  history: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SESSION_START:
      return update(state, {
        current: {
          $merge: { startedAt: payload.startedAt }
        }
      });
    case SESSION_END:
      return update(state, {
        history: {
          $push: [{
            finishedAt: payload.finishedAt,
            duration: payload.finishedAt.diff(state.current.startedAt),
            ...state.current
          }]
        },
        current: { $set: {} }
      });
    case SESSION_SET_LOCATION:
      return update(state, {
        current: {
          $merge: { location: payload.location }
        }
      });
    case SESSION_CLEAR_LOCATION:
      return update(state, {
        current: {
          $set: _.omit(state.current, ['location', 'gradeset'])
        }
      });
    case SESSION_SET_GRADESET:
      return update(state, {
        current: {
          $merge: { gradeset: payload.gradeset }
        }
      });
    default:
      return state;
  }
}
