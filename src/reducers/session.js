import update from 'immutability-helper';
import moment from 'moment';
import {
  SESSION_START,
  SESSION_RESUME,
  SESSION_PAUSE,
  SESSION_END,
  SESSION_TIMER_UPDATE,
  SESSION_SET_LOCATION
} from '../actions/SessionActions';

const initialState = {
  timer: {
    duration: 0,
    running: false
  },
  current: {},
  history: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SESSION_START:
      return update(state, {
        timer: {
          running: { $set: true }
        },
        current: {
          $merge: { startedAt: moment() }
        }
      });
    case SESSION_RESUME:
      return update(state, {
        timer: {
          running: { $set: true }
        }
      });
    case SESSION_PAUSE:
      return update(state, {
        timer: {
          running: { $set: false }
        }
      });
    case SESSION_TIMER_UPDATE:
      return update(state, {
        timer: {
          duration: { $set: payload.duration }
        }
      });
    case SESSION_END:
      return update(state, {
        timer: {
          running: { $set: false },
          duration: { $set: 0 }
        },
        history: {
          $push: [{
            duration: moment().diff(state.current.startedAt),
            finishedAt: moment(),
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
