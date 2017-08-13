import React from 'react';
// import { formatDuration } from '../utils';
import LocationSearch from './LocationSearch';
import LocationDashboard from './LocationDashboard';

const SessionDashboard = (props) => {
  const {
    session,
    availableLocations,
    setCurrentLocation
  } = props;

      // <p>Started at: {session.startedAt.format('h:mm:ss a')}</p>
      // {
      //   session.finishedAt
      //     ? <p>Finished at: {session.finishedAt.format('h:mm:ss a')}</p>
      //     : null
      // }
      // {
      //   session.duration
      //     ? <p>Duration: {formatDuration(Math.round(session.duration / 1000))}</p>
      //     : null
      // }
  return (
    <div>
      {
        session && session.location
          ? <LocationDashboard location={session.location} />
          : <LocationSearch data={availableLocations} onSelect={setCurrentLocation} />
      }
    </div>
  );
};

export default SessionDashboard;
