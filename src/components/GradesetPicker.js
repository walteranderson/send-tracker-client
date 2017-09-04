import React from 'react';
import SelectField from 'react-md/lib/SelectFields';

const GradesetPicker = (props) => {
  const {
    onChange,
    gradesets,
    defaultValue
  } = props;

  return (
    <div>
      <SelectField
        id='gradesets'
        itemValue='id'
        itemLabel='label'
        onChange={onChange}
        menuItems={gradesets}
        defaultValue={defaultValue}
        placeholder='Select a gradeset' />
    </div>
  );
};

export default GradesetPicker;
