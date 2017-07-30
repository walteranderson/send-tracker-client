import React from 'react';
import { formatDuration } from '../utils';

const SessionDashboard = (props) => {
  const { session } = props;

  return (
    <div>
      <p>Started at: {session.startedAt.format('h:mm:ss a')}</p>
      {
        session.finishedAt
          ? <p>Finished at: {session.finishedAt.format('h:mm:ss a')}</p>
          : null
      }
      {
        session.duration
          ? <p>Duration: {formatDuration(Math.round(session.duration / 1000))}</p>
          : null
      }
    </div>
  );
};

export default SessionDashboard;
