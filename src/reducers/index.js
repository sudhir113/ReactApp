import {combineReducers} from 'redux';
import secrets from './secretReducer';



const rootReducer = combineReducers({
      secrets
});

export default rootReducer;
