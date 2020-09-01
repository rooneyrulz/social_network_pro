import { combineReducers } from 'redux';

import auth from './auth';
import feed from './feed';
import like from './like';
import comment from './comment';

export default combineReducers({
  auth,
  feed,
  like,
  comment,
});
