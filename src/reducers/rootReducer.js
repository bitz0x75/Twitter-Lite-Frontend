import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import loginReducer from './SigninReducer';
import SignupReducer from './SignupReducer';
import TweetReducer from './TweetReducer';

export default combineReducers({
  exampleReducer, loginReducer, SignupReducer, TweetReducer
});