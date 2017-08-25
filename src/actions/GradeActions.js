import { makeActionCreator } from '../utils/makeActions';

export const GRADES_ALL_SENDING = 'GRADES_ALL_SENDING';
export const getAllGradesSending = makeActionCreator(GRADES_ALL_SENDING, 'sending');

export const GRADES_ALL_RECEIVED = 'GRADES_ALL_RECEIVED';
export const getAllGradesReceived = makeActionCreator(GRADES_ALL_RECEIVED, 'grades');

export const getAllGrades = () => {
  return dispatch => {
    dispatch(getAllGradesSending(true));
    setTimeout(() => {
      const grades = [
        { id: 1, label: 'Panda (V1 - V2)', color: '#FFFFFF' },
        { id: 2, label: 'Dog (V3 - V4)', color: '#000000' }
      ];
      dispatch(getAllGradesReceived(grades));
    }, 1000);
  };
};
