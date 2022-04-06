import { combineReducers } from 'redux';
import player from './player.reducer';
import token from './token.reducer';
import trivia from './trivia.reducer';

const rootReducer = combineReducers({
  player,
  token,
  trivia,
});

export default rootReducer;
