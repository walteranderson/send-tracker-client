import * as actions from '../timer';

describe('TimerActions', () => {
  function assert(expected, action, params = []) {
    const actual = action(...params);
    expect(actual).toEqual(expected);
  }

  test('start timer', () => {
    assert({
      type: actions.TIMER_START
    }, actions.startTimer);
  });

  test('pause timer', () => {
    assert({
      type: actions.TIMER_PAUSE
    }, actions.pauseTimer);
  });

  test('end timer', () => {
    assert({
      type: actions.TIMER_END
    }, actions.endTimer);
  });

  test('update timer', () => {
    const duration = 5;
    assert({
      type: actions.TIMER_UPDATE,
      payload: { duration }
    }, actions.updateTimer, [duration]);
  });
});

