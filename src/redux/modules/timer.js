import update from 'immutability-helper';
import { makeActionCreator } from '../../utils';

// ACTIONS

export const TIMER_START = 'TIMER_START';
export const startTimer = makeActionCreator(TIMER_START);

export const TIMER_PAUSE = 'TIMER_PAUSE';
export const pauseTimer = makeActionCreator(TIMER_PAUSE);

export const TIMER_END = 'TIMER_END';
export const endTimer = makeActionCreator(TIMER_END);

export const TIMER_UPDATE = 'TIMER_UPDATE';
export const updateTimer = makeActionCreator(TIMER_UPDATE, 'duration');


// REDUCER

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
