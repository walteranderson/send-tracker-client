import update from 'immutability-helper';
import {
  MERGE_ENTITIES
} from '../actions/EntityActions';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MERGE_ENTITIES:
      return update(state, {
        $merge: payload.entities
      });
    default:
      return state;
  }
};
