import { combineReducers } from 'redux';
import getUserDetails from './getUserDetails';

const rootReducer = combineReducers({
    users: getUserDetails,
  });
  
  export default rootReducer;