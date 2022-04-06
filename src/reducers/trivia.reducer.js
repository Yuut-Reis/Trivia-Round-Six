const INITIAL_STATE = {
  questions: {},
};

const trivia = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_QUESTIONS_SUCCESS':
    return {
      ...state,
      questions: action.payload,
    };
  default:
    return state;
  }
};

export default trivia;
