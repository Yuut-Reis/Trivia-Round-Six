import { fetchQuestionAPI, fetchTokenAPI } from '../services/requestTrivia';

export const fetchTokenAction = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TOKEN_REQUEST_START' });
  try {
    const token = await fetchTokenAPI();
    dispatch({ type: 'FETCH_TOKEN_REQUEST_SUCCESS', payload: token.token });
  } catch (error) {
    dispatch({ type: 'FETCH_TOKEN_REQUEST_FAILURE', payload: error });
  }
};

export const playerAction = (email, name) => ({
  type: 'SET_EMAIL',
  payload: { email, name },
});

export const scoreAction = (assertions, score) => ({
  type: 'SET_SCORE',
  payload: { assertions, score },
});

export const timeAction = (time) => ({
  type: 'SET_TIME',
  payload: time,
});

export const nextAction = (index) => ({
  type: 'SET_NEXT',
  payload: index,
});

export const fetchQuestionAction = (token) => async (dispatch) => {
  dispatch({ type: 'FETCH_QUESTIONS_START' });
  try {
    dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: await fetchQuestionAPI(token) });
  } catch (error) {
    dispatch({ type: 'FETCH_QUESTIONS_ERROR', payload: error });
  }
};
