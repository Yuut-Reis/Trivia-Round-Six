import { combineReducers } from 'redux';
import player from './player.reducer';
import token from './token.reducer';
import trivia from './trivia.reducer';
import timer from './timer.reducer';
import next from './next.reducer';

const rootReducer = combineReducers({
  player,
  token,
  trivia,
  timer,
  next,
});

export default rootReducer;
