import React from 'react';

const LocationDashboard = (props) => {
  const { location } = props;
  return (
    <h2>{ location.label }</h2>
  );
};

export default LocationDashboard;
