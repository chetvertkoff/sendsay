import ResHistory from "../../utils/ResHistory";
import { REQ_HISTORY } from "../types";

export const deleteReqHistoryItem = id => dispatch => {
  dispatch({type: REQ_HISTORY, payload: ResHistory.deleteReqItemById(id)});
}