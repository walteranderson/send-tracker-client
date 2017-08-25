import update from 'immutability-helper';
import {
  GRADES_ALL_RECEIVED,
  GRADES_ALL_SENDING
} from '../actions/GradeActions';

const initialState = {
  sending: false,
  all: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GRADES_ALL_SENDING:
      return update(state, {
        sending: { $set: payload.sending }
      });
    case GRADES_ALL_RECEIVED:
      return update(state, {
        all: { $set: payload.grades }
      });
    default:
      return state;
  }
}
