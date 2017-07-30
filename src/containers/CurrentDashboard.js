import { connect } from 'react-redux';
import SessionDashboard from '../components/SessionDashboard';

const mapStateToProps = (state) => {
  const { session } = state;

  return {
    session: session.current
  };
};

export default connect(mapStateToProps)(SessionDashboard);
