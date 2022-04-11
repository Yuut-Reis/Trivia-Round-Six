const INICIAL_STATE = {
  time: 30,
  resetTime: false,
};

const timer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_TIME':
    return { ...state,
      time: action.payload };
  case 'SET_RESET':
    return { ...state,
      resetTime: action.payload };
  default:
    return state;
  }
};

export default timer;
