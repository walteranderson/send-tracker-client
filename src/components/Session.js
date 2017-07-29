import React from 'react';
import SessionTimer from './SessionTimer';

const Session = (props) => {
  const {
    session,
    startSession,
    pauseSession,
    endSession,
    timerUpdate
  } = props;

  return (
    <div>
      <SessionTimer timer={session.timer} updateHandler={timerUpdate} />

      <button onClick={startSession}>Start</button>
      <button onClick={pauseSession}>Pause</button>
      <button onClick={endSession}>Stop</button>
    </div>
  );
}

export default Session;
