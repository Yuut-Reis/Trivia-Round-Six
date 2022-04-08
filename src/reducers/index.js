import { combineReducers } from 'redux';
import player from './player.reducer';
import token from './token.reducer';
import trivia from './trivia.reducer';
import timer from './timer.reducer';

const rootReducer = combineReducers({
  player,
  token,
  trivia,
  timer,
});

export default rootReducer;
