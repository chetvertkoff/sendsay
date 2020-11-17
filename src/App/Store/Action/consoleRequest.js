import { REQ_DATA, RES_DATA } from "../types";
import Sendsay from 'sendsay-api';
import Cookies from 'js-cookie';

const sendsay = new Sendsay();
const session = Cookies.get('sendsay_session') || null;
export const getReqData = val => dispatch => dispatch({type: REQ_DATA, payload: val});

// {
//   "action":"sys.settings.get"
// }

export const sendReqData = val => async dispatch => {
  val = JSON.parse(val)
  const res = await sendsay.request({...val, session});
  console.log(res);
  dispatch({type: RES_DATA, payload: res})
};