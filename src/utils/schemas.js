import { schema } from 'normalizr';

export const gradeSchema = new schema.Entity('grades');

export const gradesetSchema = new schema.Entity('gradesets', {
  grades: [ gradeSchema ]
});

export const locationSchema = new schema.Entity('locations', {
  gradesets: [ gradesetSchema ]
});


export const userSchema = new schema.Entity('users', {
  locations: [ locationSchema ]
});
