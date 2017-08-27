import update from 'immutability-helper';
import {
  SESSION_START,
  SESSION_END,
  SESSION_SET_LOCATION
} from '../actions/SessionActions';

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
