import { connect } from 'react-redux';
import Session from '../components/Session';
import {
  startSession,
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
    startSession() {
      dispatch(startSession());
    },
    pauseSession() {
      dispatch(pauseSession());
    },
    endSession() {
      dispatch(endSession());
    },
    timerUpdate(duration) {
      dispatch(timerUpdate(duration));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);

