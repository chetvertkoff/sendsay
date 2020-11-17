import { REQ_DATA, RES_DATA } from "../types";

const initialState = {
  reqData: {},
  resData: {}
}

const consoleRequest = (state = initialState, action) => {
  switch (action.type) {
    case REQ_DATA:
      return {...state, reqData: action.payload};
    case RES_DATA:
      return {...state, resData: action.payload};
    default:
      return state;
  }
}

export default consoleRequest;