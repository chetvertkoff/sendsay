import ResHistory from "../../utils/ResHistory";
import { REQ_HISTORY } from "../types";


export const deleteReqHistoryItem = val => dispatch => {
  dispatch({type: REQ_HISTORY, payload: ResHistory.deleteHistoryItem(val)});
}