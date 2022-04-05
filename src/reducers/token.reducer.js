const INITIAL_STATE = {
  token: {},
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case 'SET_TOKEN':
  //   return {
  //     ...state,
  //     token: action.payload,
  //   };
  case 'FETCH_TOKEN_REQUEST_SUCCESS':
    return {
      ...state,
      token: action.payload,
    };
  case 'FETCH_TOKEN_REQUEST_FAILURE':
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default token;
