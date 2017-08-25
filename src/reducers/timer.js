import update from 'immutability-helper';
import {
  TIMER_START,
  TIMER_PAUSE,
  TIMER_UPDATE,
  TIMER_END
} from '../actions/TimerActions';

const initialState = {
  running: false,
  duration: 0
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TIMER_START:
      return update(state, {
        running: { $set: true }
      });

    case TIMER_PAUSE:
      return update(state, {
        running: { $set: false }
      });

    case TIMER_UPDATE:
      return update(state, {
        duration: { $set: payload.duration }
      });

    case TIMER_END:
      return update(state, {
        running: { $set: false },
        duration: { $set: 0 }
      });

    default:
      return state;
  }
}
