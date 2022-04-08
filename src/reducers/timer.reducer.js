const INICIAL_STATE = {
  time: 0,
};

const timer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_TIME':
    return action.payload;
  default:
    return state;
  }
};

export default timer;
