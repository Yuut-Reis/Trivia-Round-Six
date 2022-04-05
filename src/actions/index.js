const tokenAction = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const fetchTokenAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TOKEN_REQUEST_START' });
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    console.log('data ', data);
    dispatch({ type: 'FETCH_TOKEN_REQUEST_SUCCESS', payload: data.token });
  } catch (error) {
    dispatch({ type: 'FETCH_TOKEN_REQUEST_FAILURE', payload: error });
  }
};

export default tokenAction;
