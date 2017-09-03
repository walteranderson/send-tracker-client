import reducer, {
  startTimer,
  pauseTimer,
  updateTimer,
  endTimer
} from '../timer';

const initialState = {
  running: false,
  duration: 0
};

function make(overrides) {
  return Object.assign({}, initialState, overrides);
}

function equals(action, expected, overrides = {}) {
  const state = make(overrides);
  const actual = reducer(state, action);

  expect(actual).toEqual(expected);
}

test('TIMER_START', () => {
  const expected = make({
    running: true
  });

  equals(startTimer(), expected);
});

test('TIMER_PAUSE', () => {
  const initial = make({
    running: true
  });

  const expected = make({
    running: false
  });

  equals(pauseTimer(), expected, initial);
});

test('TIMER_UPDATE', () => {
  const duration = 1;
  const expected = make({
    duration
  });

  equals(updateTimer(duration), expected);
});

test('TIMER_END', () => {
  const initial = make({
    running: true,
    duration: 50
  });

  const expected = make({
    running: false,
    duration: 0
  });

  equals(endTimer(), expected, initial);
});
