import http from './http';
import * as dummyData from './dummy';

const USE_DUMMY_API = process.env.REACT_APP_USE_DUMMY_API;

export const getAllLocations = () => {
  if (USE_DUMMY_API) {
    return Promise.resolve(dummyData.allLocations);
  }

  return http
    .get('/locations')
    .then(res => res.data);
};
