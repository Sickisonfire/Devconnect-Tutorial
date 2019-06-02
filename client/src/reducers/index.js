//combines all reducers in reducers folder

import { combineReducers } from 'redux';
import alert from './alert';

export default combineReducers({
  alert
});
