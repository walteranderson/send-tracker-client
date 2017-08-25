import {
  makeActionCreator
} from '../utils/makeActions';

export const TIMER_START = 'TIMER_START';
export const startTimer = makeActionCreator(TIMER_START);

export const TIMER_PAUSE = 'TIMER_PAUSE';
export const pauseTimer = makeActionCreator(TIMER_PAUSE);

export const TIMER_END = 'TIMER_END';
export const endTimer = makeActionCreator(TIMER_END);

export const TIMER_UPDATE = 'TIMER_UPDATE';
export const updateTimer = makeActionCreator(TIMER_UPDATE, 'duration');
