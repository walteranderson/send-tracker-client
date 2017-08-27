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
  const hasLocation = session && session.location;

  return (
    <div className={className}>
      {
        hasLocation
          ? <LocationDashboard location={session.location} />
          : <LocationSearch data={availableLocations} onSelect={setCurrentLocation} />
      }
    </div>
  );
};

export default SessionDashboard;
