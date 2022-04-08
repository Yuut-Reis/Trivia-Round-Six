const INITIAL_STATE = {
  index: 0,
};

const next = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_NEXT':
    return {
      ...state,
      index: state.index + 1,
    };
  default:
    return state;
  }
};

export default next;
