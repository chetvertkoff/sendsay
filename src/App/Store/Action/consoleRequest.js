import { REQ_DATA, REQ_LOADING, RES_DATA, RES_ERR, REQ_HISTORY } from "../types";
import Sendsay from 'sendsay-api';
import { writeResHistory } from "../../utils/writeResHistory";

const sendsay = new Sendsay();

export const getReqData = val => dispatch => dispatch({type: REQ_DATA, payload: val});

// {
//   "action":"issue.send"
// }

// {
//   "action":"sys.settings.get"
// }

export const sendReqData = val => async dispatch => {
  const parseReq = JSON.parse(val);
  let isErr = false;
  let res;

  dispatch({type: REQ_LOADING, payload: true});
  try {
    sendsay.setSessionFromCookie();
    res = await sendsay.request({...parseReq}); 
    dispatch({type: RES_ERR, payload: false});
  } catch (error) {
    if(error.id?.split('/')[1] === "auth") return "logout";
    res = error;
    isErr = true;
  }
  if(res.sublogin) delete res.sublogin;
  dispatch({type: RES_DATA, payload: res});
  dispatch({type: RES_ERR, payload: isErr});
  dispatch({type: REQ_HISTORY, payload: writeResHistory(parseReq, isErr)});
};