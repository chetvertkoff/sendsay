import { REQ_DATA, REQ_LOADING, RES_DATA, RES_ERR, REQ_HISTORY } from "../types";
import Sendsay from 'sendsay-api';
import ResHistory from "../../utils/ResHistory";

const sendsay = new Sendsay();

export const getReqData = val => ({type: REQ_DATA, payload: val});

// {
//   "action":"issue.send"
// }

// {
//   "action":"sys.settings.get"
// }

export const sendReqData = val => async (dispatch) => {
  const parseReq = JSON.parse(val);
  let isErr = false;
  let res;

  dispatch({type: REQ_LOADING, payload: true});
  try {
    sendsay.setSessionFromCookie();
    res = await sendsay.request({...parseReq}); 
    dispatch({type: RES_ERR, payload: false});
  } catch (error) {
    if(error.id?.split('/')[1] === "auth"){
      dispatch({type: REQ_LOADING, payload: false});
      return "logout";
    };
    res = error;
    isErr = true;
  }
  if(res.sublogin) delete res.sublogin;
  dispatch({type: RES_DATA, payload: res});
  dispatch({type: RES_ERR, payload: isErr});

  parseReq.actionId = '_' + Math.random().toString(36).substr(2, 9);
  const reqHistory = ResHistory.writeResHistory(parseReq, isErr);
  if(reqHistory){
    dispatch({type: REQ_HISTORY, payload: reqHistory});
  }
};