import { connect } from 'react-redux';
import _ from 'lodash';
import SessionDashboard from '../components/SessionDashboard';
import { setLocation } from '../redux/modules/session';

const mapStateToProps = (state) => {
  const {
    session,
    entities
  } = state;

  let availableLocations = [];
  if (entities.locations) {
    availableLocations = _.map(entities.locations, location => location);
  }

  return {
    availableLocations,
    session: session.current
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
