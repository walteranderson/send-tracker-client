import { connect } from 'react-redux';
import SessionPage from '../components/SessionPage';
import {
  startSession,
  resumeSession,
  pauseSession,
  endSession,
  timerUpdate
} from '../actions/SessionActions';

const mapStateToProps = (state) => {
  const { session } = state;

  return {
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // only start the session if the timer isn't running
    // if we have a current session running, resume instead of starting a new one.
    startSession(session) {
      if (session.timer.running) {
        return;
      }

      if (session.current && session.current.startedAt) {
        dispatch(resumeSession());
      } else {
        dispatch(startSession());
      }
    },
    // only pause if the timer is running.
    pauseSession(session) {
      if (!session.timer.running) {
        return;
      }

      dispatch(pauseSession());
    },
    // only end if we have a current session.
    endSession(session) {
      if (!session.current) {
        return;
      }

      dispatch(endSession());
    },
    // update the timer.
    timerUpdate(duration) {
      dispatch(timerUpdate(duration));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
