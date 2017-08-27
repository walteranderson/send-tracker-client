import React from 'react';
import SessionTimer from '../SessionTimer';
import { CurrentDashboard } from '../../containers';
import SessionControls from '../SessionControls';

import './index.css';

const SessionPage = (props) => {
  const {
    timer,
    session,
    startSession,
    pauseSession,
    endSession,
    timerUpdate
  } = props;

  const start = () => startSession(session, timer);
  const pause = () => pauseSession(timer);
  const end = () => endSession(session);

  return (
    <div>
      <SessionTimer
        timer={timer}
        updateHandler={timerUpdate} />

      <CurrentDashboard className='session-page__dashboard' />

      <SessionControls
        timer={timer}
        session={session}
        start={start}
        pause={pause}
        end={end} />
    </div>
  );
};

export default SessionPage;
