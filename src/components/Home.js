import React from 'react';
import { Session } from '../containers';
import Button from 'react-md/lib/Buttons/Button';

const Home = () => {
  return (
    <div className='md-cell'>
      <Session />
      <Button raised label='Hello' iconBefore={false}>
        <i className="material-icons">face</i>
      </Button>
    </div>
  );
};

export default Home;
