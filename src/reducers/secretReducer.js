import * as types from '../constants/actionTypes';


export default function secretReducer(state=[],action) {
    switch(action.type){
      case types.SECRET_DATA:
        return action.secret;

      default:
        return state;
    }

  }
