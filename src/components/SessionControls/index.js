import React from 'react';
import Button from 'react-md/lib/Buttons/Button';

import './index.css';

const SessionControls = (props) => {
  const {
    timer,
    session,
    start,
    pause,
    end
  } = props;

  let endButton;
  if (session.current && session.current.startedAt) {
    endButton = (
      <div className='session-controls__end'>
        <Button
          primary
          raised
          onClick={end}>
            End
        </Button>
      </div>
    );
  }

  let clickHandler = start;
  let icon = 'play_arrow';
  if (timer.running) {
    icon = 'pause';
    clickHandler = pause;
  }

  return (
    <div>
      <Button
        onClick={clickHandler}
        floating
        secondary
        fixed>
          {icon}
      </Button>
      {endButton}
    </div>
  );
};

export default SessionControls;
