import * as types from "../constants/actionTypes";


export default function secretAction(secret){
  return {type:types.SECRET_DATA,secret}
}
