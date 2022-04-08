const INITIAL_STATE = {
  name: '',
  assertions: 0,
  email: '',
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      ...state,
      name: action.payload.name,
      // assertions: action.payload.assertions,
      email: action.payload.email,
      // score: action.payload.score,
    };
  case 'SET_SCORE':
    return {
      ...state,
      // name: action.payload.name,
      assertions: action.payload.assertions,
      // email: action.payload.email,
      score: action.payload.score,
    };
  default:
    return state;
  }
};

export default player;
