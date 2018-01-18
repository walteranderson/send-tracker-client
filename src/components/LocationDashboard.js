import React from 'react';
import Button from 'react-md/lib/Buttons';
import GradesetPicker from './GradesetPicker';
import AddSendButton from './AddSendButton';

const LocationDashboard = (props) => {
  const {
    grades,
    addSend,
    location,
    gradesets,
    setGradeset,
    clearLocation,
    selectedGradeset
  } = props;

  return (
    <div>
      <Button onClick={clearLocation} style={{float: 'right'}} icon>undo</Button>

      <h2 style={{paddingTop: '12px'}}>{ location.label }</h2>

      <GradesetPicker
        gradesets={gradesets}
        onChange={setGradeset}
        defaultValue={selectedGradeset.id} />

      <div className='send-buttons'>
        {
          grades.map(g => <AddSendButton key={g.id} grade={g} submitHandler={addSend} />)
        }
      </div>

    </div>
  );
};

export default LocationDashboard;
