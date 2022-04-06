export const fetchTokenAPI = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data;
};

const number = 5;
export const fetchQuestionAPI = async (token, quantity = number) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${token}`);
  const data = await response.json();
  return data;
};
