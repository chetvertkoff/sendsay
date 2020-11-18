import { REQ_DATA, REQ_ERR, REQ_LOADING, RES_DATA } from "../types";

const initialState = {
  reqData: {},
  resData: {},
  reqErr: false,
  resErr: false,
  loading: false
}

const consoleRequest = (state = initialState, action) => {
  switch (action.type) {
    case REQ_DATA:
      return {...state, reqData: action.payload};
    case RES_DATA:
      return {...state, resData: action.payload, loading: false};
    case REQ_ERR:
      return {...state, reqErr: action.payload};
    case REQ_LOADING:
      return {...state, loading: action.payload}
    default:
      return state;
  }
}
export default consoleRequest;