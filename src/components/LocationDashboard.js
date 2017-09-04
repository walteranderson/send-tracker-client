import React from 'react';
import Button from 'react-md/lib/Buttons';
import GradesetPicker from './GradesetPicker';

const LocationDashboard = (props) => {
  const {
    location,
    gradesets,
    setGradeset,
    clearLocation,
    selectedGradeset
  } = props;

  return (
    <div>
      <Button onClick={clearLocation} style={{float: 'right'}} icon>undo</Button>

      <h2 style={{padding: '12px 0'}}>{ location.label }</h2>

      <GradesetPicker
        gradesets={gradesets}
        onChange={setGradeset}
        defaultValue={selectedGradeset.id} />

    </div>
  );
};

export default LocationDashboard;
