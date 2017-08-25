import moment from 'moment';
import {
  makeAction,
  makeActionCreator
} from '../utils';

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
