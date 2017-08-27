import moment from 'moment';
import * as actions from '../SessionActions';

describe('SessionActions', () => {
  function assert(expected, action, params = []) {
    const actual = action(...params);
    expect(actual).toEqual(expected);
  }

  test('start session', () => {
    const expected = {
      type: actions.SESSION_START,
      payload: {
        startedAt: moment()
      }
    };

    assert(expected, actions.startSession);
  });

  test('end session', () => {
    const expected = {
      type: actions.SESSION_END,
      payload: {
        finishedAt: moment()
      }
    };

    assert(expected, actions.endSession);
  });

  test('set location', () => {
    const location = {
      name: 'test',
      label: 'Testing'
    };

    const expected = {
      type: actions.SESSION_SET_LOCATION,
      payload: { location }
    };

    assert(expected, actions.setLocation, [location]);
  });
});
