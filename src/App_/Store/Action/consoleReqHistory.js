import ResHistory from "../../utils/ResHistory";
import { REQ_HISTORY } from "../types";

export const deleteReqHistoryItem = id => ({type: REQ_HISTORY, payload: ResHistory.deleteReqItemById(id)});

export const deleteHistory = () => ({type: REQ_HISTORY, payload: ResHistory.deleteAllHistoryItems()});