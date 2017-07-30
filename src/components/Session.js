import React from 'react';
import SessionTimer from './SessionTimer';
import { CurrentDashboard } from '../containers';
import SessionDashboard from './SessionDashboard';

const Session = (props) => {
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
      <SessionTimer timer={session.timer} updateHandler={timerUpdate} />

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={end}>Stop</button>

      <p>Current Session:</p>
      {
        session.current
          ? <CurrentDashboard />
          : null
      }

      <p>History:</p>
      {sessionHistory}

    </div>
  );
}

export default Session;
