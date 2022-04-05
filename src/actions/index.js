export const fetchTokenAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TOKEN_REQUEST_START' });
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    dispatch({ type: 'FETCH_TOKEN_REQUEST_SUCCESS', payload: data.token });
  } catch (error) {
    dispatch({ type: 'FETCH_TOKEN_REQUEST_FAILURE', payload: error });
  }
};

export const playerAction = (email, name) => ({
  type: 'SET_EMAIL',
  payload: { email, name },
});
