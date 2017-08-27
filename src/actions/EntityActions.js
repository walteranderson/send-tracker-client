import { makeActionCreator } from '../utils'

export const MERGE_ENTITIES = 'MERGE_ENTITIES';
export const mergeEntities = makeActionCreator(MERGE_ENTITIES, 'entities');
