import { schema } from 'normalizr';

export const gradeSchema = new schema.Entity('grades');

export const locationSchema = new schema.Entity('locations', {
  grades: [ gradeSchema ]
});
