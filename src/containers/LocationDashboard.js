import _ from 'lodash';
import { connect } from 'react-redux';
import LocationDashboard from '../components/LocationDashboard';
import {
  addSend,
  setGradeset,
  clearLocation
} from '../redux/modules/session';

const mapStateToProps = (state, ownProps) => {
  const location = _.find(state.entities.locations, location => {
    return location.id === ownProps.location
  });

  const gradesets = _.filter(state.entities.gradesets, gradeset => {
    return location.gradesets.indexOf(gradeset.id) !== -1;
  });

  const selectedGradeset = _.find(gradesets, gradeset => gradeset.id === ownProps.gradeset);

  let grades;
  if (selectedGradeset) {
    grades = _.filter(state.entities.grades, grade => {
      return selectedGradeset.grades.indexOf(grade.id) !== -1;
    });
  }

  return {
    grades,
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
    },
    addSend(grade) {
      dispatch(addSend(grade));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDashboard);
