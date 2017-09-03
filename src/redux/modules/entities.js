import update from 'immutability-helper';
import { normalize } from 'normalizr';
import { makeActionCreator } from '../../utils'

// ACTIONS

export const MERGE_ENTITIES = 'MERGE_ENTITIES';
export const mergeEntities = makeActionCreator(MERGE_ENTITIES, 'data', 'schema');


// REDUCER

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MERGE_ENTITIES:
      const { entities } = normalize(payload.data, payload.schema);

      return update(state, {
        $merge: entities
      });
    default:
      return state;
  }
};
