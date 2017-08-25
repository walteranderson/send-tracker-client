import reducer from '../grades';
import {
  GRADES_ALL_RECEIVED,
  GRADES_ALL_SENDING
} from '../../actions/GradeActions';

// idea:
// - use V-system to create searchable chips to mark a grade
//   one or more V rankings. Since they're separate entities,
//   eventually we could create some interesting analytics from it.
const exampleGrade = {
  id: 1,
  label: 'Panda (V1 - V2)',
  color: '#eeffcc'
};

const initialState = {
  all: []
};

function make(overrides) {
  return Object.assign({}, initialState, overrides);
}

function equals(action, expected, overrides = {}) {
  const state = make(overrides);
  const actual = reducer(state, action);

  expect(actual).toEqual(expected);
}

test('GRADES_ALL_SENDING', () => {
  const expected = make({
    sending: true
  });

  const action = {
    type: GRADES_ALL_SENDING,
    payload: { sending: true }
  };

  equals(action, expected);
});

test('GRADES_ALL_RECEIVED', () => {
  const expected = make({
    all: [exampleGrade]
  });

  const action = {
    type: GRADES_ALL_RECEIVED,
    payload: { grades: [exampleGrade] }
  };

  equals(action, expected);
});
