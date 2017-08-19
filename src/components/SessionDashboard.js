import React from 'react';
import LocationSearch from './LocationSearch';
import LocationDashboard from './LocationDashboard';

const SessionDashboard = (props) => {
  const {
    session,
    className,
    availableLocations,
    setCurrentLocation
  } = props;

  return (
    <div className={className}>
      {
        session && session.location
          ? <LocationDashboard location={session.location} />
          : <LocationSearch data={availableLocations} onSelect={setCurrentLocation} />
      }
    </div>
  );
};

export default SessionDashboard;
