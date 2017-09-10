import React from 'react';
import SelectField from 'react-md/lib/SelectFields';

const GradesetPicker = (props) => {
  const {
    onChange,
    gradesets,
    defaultValue
  } = props;

  const menuItems = gradesets.map(g => ({
    id: g.id,
    label: g.label
  }));

  return (
    <div>
      <SelectField
        id='gradesets'
        itemValue='id'
        itemLabel='label'
        onChange={onChange}
        menuItems={menuItems}
        defaultValue={defaultValue}
        placeholder='Select a gradeset' />
    </div>
  );
};

export default GradesetPicker;
