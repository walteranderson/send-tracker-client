
export const SESSION_START = 'SESSION_START';
export const startSession = () => {
  return {
    type: SESSION_START
  };
};

export const SESSION_RESUME = 'SESSION_RESUME';
export const resumeSession = () => {
  return {
    type: SESSION_RESUME
  };
};

export const SESSION_PAUSE = 'SESSION_PAUSE';
export const pauseSession = () => {
  return {
    type: SESSION_PAUSE
  }
};

export const SESSION_END = 'SESSION_END';
export const endSession = () => {
  return {
    type: SESSION_END
  };
};

export const SESSION_TIMER_UPDATE = 'SESSION_TIMER_UPDATE';
export const timerUpdate = (duration) => {
  return {
    type: SESSION_TIMER_UPDATE,
    payload: {
      duration
    }
  };
};

export const SESSION_SET_LOCATION = 'SESSION_SET_LOCATION';
export const setLocation = (location) => {
  return {
    type: SESSION_SET_LOCATION,
    payload: {
      location
    }
  };
};
