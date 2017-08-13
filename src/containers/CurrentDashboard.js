import { connect } from 'react-redux';
import SessionDashboard from '../components/SessionDashboard';

import { setLocation } from '../actions/SessionActions';

const mapStateToProps = (state) => {
  const {
    session,
    locationSearch
  } = state;

  return {
    session: session.current,
    availableLocations: locationSearch.available
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
