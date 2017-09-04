import _ from 'lodash';
import { connect } from 'react-redux';
import LocationDashboard from '../components/LocationDashboard';
import { setGradeset, clearLocation } from '../redux/modules/session';

const mapStateToProps = (state, ownProps) => {
  const location = _.find(state.entities.locations, location => {
    return location.id === ownProps.location
  });

  const gradesets = _.filter(state.entities.gradesets, gradeset => {
    return location.gradesets.indexOf(gradeset.id) !== -1;
  });

  const selectedGradeset = _.find(gradesets, gradeset => gradeset.id === ownProps.gradeset);

  return {
    location,
    gradesets,
    selectedGradeset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGradeset(gradesetId) {
      dispatch(setGradeset(gradesetId));
    },
    clearLocation() {
      dispatch(clearLocation());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDashboard);
