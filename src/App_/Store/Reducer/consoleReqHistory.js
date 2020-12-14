import { REQ_HISTORY } from '../types';

const initialHistory = JSON.parse(localStorage.getItem('reqItems')) || [];
const initialState = {
  reqHistory: initialHistory,
}

const consoleReqHistory = (state = initialState, action) => {
  switch(action.type){
    case REQ_HISTORY:
      return {...state, reqHistory: action.payload};
    default:
      return state;
  }
}

export default consoleReqHistory;
