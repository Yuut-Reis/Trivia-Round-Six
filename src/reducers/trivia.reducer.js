const trivia = (state = {}, action) => {
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
