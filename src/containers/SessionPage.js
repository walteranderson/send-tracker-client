import { connect } from 'react-redux';
import SessionPage from '../components/SessionPage';
import {
  startSession,
  endSession
} from '../redux/modules/session';
import {
  startTimer,
  pauseTimer,
  updateTimer,
  endTimer
} from '../redux/modules/timer';

const mapStateToProps = (state) => {
  const { session, timer } = state;

  return {
    timer,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // only start the session if the timer isn't running
    // if we have a current session running, resume instead of starting a new one.
    startSession(session, timer) {
      if (timer.running) {
        return;
      }

      if (session.current && session.current.startedAt) {
        dispatch(startTimer());
      } else {
        dispatch(startTimer());
        dispatch(startSession());
      }
    },

    // only pause if the timer is running.
    pauseSession(timer) {
      if (!timer.running) {
        return;
      }

      dispatch(pauseTimer());
    },

    // only end if we have a current session.
    endSession(session) {
      if (!session.current) {
        return;
      }

      dispatch(endTimer());
      dispatch(endSession());
    },

    // update the timer.
    timerUpdate(duration) {
      dispatch(updateTimer(duration));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
