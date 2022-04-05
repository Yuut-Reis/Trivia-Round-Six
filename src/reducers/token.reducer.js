const token = (state = '', action) => {
  switch (action.type) {
  case 'FETCH_TOKEN_REQUEST_SUCCESS':
    return action.payload;
  case 'FETCH_TOKEN_REQUEST_FAILURE':
    return action.payload;
  default:
    return state;
  }
};

export default token;
