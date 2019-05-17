import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import loginReducer from './SigninReducer';
import signupReducer from './SignupReducer';
import TweetReducer from './TweetReducer';
import fetchTweetsReducer from './fetchTweetsReducer';
import fetchHashtagReducer from './fetchHashtagReducer';

export default combineReducers({
  exampleReducer, loginReducer, signupReducer, TweetReducer, fetchTweetsReducer,fetchHashtagReducer
});