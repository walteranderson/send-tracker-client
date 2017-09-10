import React from 'react';
import Button from 'react-md/lib/Buttons/Button';

const AddSendButton = props => {
  const {
    grade,
    submitHandler
  } = props;

  const onClick = () => submitHandler(grade);

  return (
    <Button style={{ margin: '6px 4px' }} onClick={onClick} flat primary swapTheming>
      {grade.label}
    </Button>
  );
};

export default AddSendButton;
