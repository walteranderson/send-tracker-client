import moment from 'moment';
import reducer, {
  SESSION_START,
  SESSION_END,
} from '../session';

const initialState = {
  current: {},
  history: []
};

function make(overrides) {
  return Object.assign({}, initialState, overrides);
}

function equals(action, expected, overrides = {}) {
  const state = make(overrides);
  const actual = reducer(state, action);

  expect(actual).toEqual(expected);
}

test('session start', () => {
  const startedAt = moment();
  const expected = make({
    current: { startedAt }
  });

  const action = {
    type: SESSION_START,
    payload: { startedAt }
  };

  equals(action, expected);
});

test('session end', () => {
  const startedAt = moment();
  const finishedAt = moment().add(1, 'hour');
  const initial = make({
    current: { startedAt }
  });

  const expected = make({
    current: {},
    history: [
      {
        startedAt,
        finishedAt,
        duration: finishedAt.diff(startedAt)
      }
    ]
  });

  const action = {
    type: SESSION_END,
    payload: { finishedAt }
  };

  equals(action, expected, initial);
});
