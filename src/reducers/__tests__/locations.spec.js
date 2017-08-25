import reducer from '../locations';

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

test('initialState', () => {
  equals({}, make());
});
