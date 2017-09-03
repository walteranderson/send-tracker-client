import update from 'immutability-helper';
import moment from 'moment';
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
    default:
      return state;
  }
}
