import { connect } from 'react-redux';
import _ from 'lodash';
import SessionDashboard from '../components/SessionDashboard';
import { setLocation, setGradeset } from '../redux/modules/session';

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
    setCurrentLocation(location) {
      dispatch(setLocation(location.id));
      dispatch(setGradeset(location.gradesets[0]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionDashboard);
