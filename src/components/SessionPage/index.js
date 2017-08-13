import React from 'react';
import SessionTimer from '../SessionTimer';
import { CurrentDashboard } from '../../containers';
import SessionDashboard from '../SessionDashboard';
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

  // make sure you can't click the buttons in the wrong order
  const start = () => startSession(session);
  const pause = () => pauseSession(session);
  const end = () => endSession(session);

  let sessionHistory;
  if (session.history.length) {
    sessionHistory = session.history.map((s, i) => {
      return (
        <div key={i}>
          <SessionDashboard session={s} />
          <hr />
        </div>
      );
    });
  }

  return (
    <div>
      <SessionTimer
        timer={session.timer}
        updateHandler={timerUpdate} />

      <div className='session-page__dashboard'>
        {
          session.current
            ? <CurrentDashboard />
            : null
        }

        {sessionHistory}
      </div>

      <SessionControls
        session={session}
        start={start}
        pause={pause}
        end={end} />
    </div>
  );
}

export default SessionPage;
