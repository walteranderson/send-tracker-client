import React from 'react';
import SessionTimer from '../SessionTimer';
import { CurrentDashboard } from '../../containers';
import SessionControls from '../SessionControls';

import './index.css';

const SessionPage = (props) => {
  const {
    session,
    startSession,
    pauseSession,
    endSession,
    timerUpdate
  } = props;

  const start = () => startSession(session);
  const pause = () => pauseSession(session);
  const end = () => endSession(session);

  return (
    <div>
      <SessionTimer
        timer={session.timer}
        updateHandler={timerUpdate} />

      <CurrentDashboard className='session-page__dashboard' />

      <SessionControls
        session={session}
        start={start}
        pause={pause}
        end={end} />
    </div>
  );
};

export default SessionPage;
