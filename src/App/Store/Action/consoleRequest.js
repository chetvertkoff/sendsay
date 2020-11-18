import { REQ_DATA, REQ_LOADING, RES_DATA } from "../types";
import Sendsay from 'sendsay-api';
import Cookies from 'js-cookie';

const sendsay = new Sendsay();
const session = Cookies.get('sendsay_session') || null;
export const getReqData = val => dispatch => dispatch({type: REQ_DATA, payload: val});

// {
//   "action":"sys.settings.get"
// }

export const sendReqData = val => async dispatch => {
  // const res = await sendsay.request({...val, session});
  dispatch({type: REQ_LOADING, payload: true});
  setTimeout(() => {
    // writeResHistory(val)
    dispatch({type: RES_DATA, payload: val})
  }, 500);
};