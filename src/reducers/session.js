import update from 'immutability-helper';
import {
  SESSION_START,
  SESSION_PAUSE,
  SESSION_END,
  SESSION_TIMER_UPDATE
} from '../actions/SessionActions';

const initialState = {
  timer: {
    duration: 0,
    running: false
  },
  // current: null,
  history: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SESSION_START:
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
            duration: state.timer.duration
          }]
        }
      });
    default:
      return state;
  }
}
