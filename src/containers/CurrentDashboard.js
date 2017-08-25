import { connect } from 'react-redux';
import SessionDashboard from '../components/SessionDashboard';

import { setLocation } from '../actions/SessionActions';

const mapStateToProps = (state) => {
  const {
    session,
    locations
  } = state;

  return {
    session: session.current,
    availableLocations: locations.all
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentLocation(currentLocation) {
      dispatch(setLocation(currentLocation));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionDashboard);
