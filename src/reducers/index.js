import { combineReducers } from 'redux';
import player from './player.reducer';
import token from './token.reducer';

const rootReducer = combineReducers({
  player,
  token,
});

export default rootReducer;
