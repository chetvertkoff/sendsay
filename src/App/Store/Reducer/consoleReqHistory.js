import { HISTORY_MODEL, SHOW_DROP } from '../types';


const initialState = {
  showDrop:false,
  historyModel: [{
    id: Date.now(),
    err: false,
    name: "track.get",
    res: {}
  }]
}

const consoleReqHistory = (state = initialState, action) => {
  switch(action.type){
    case SHOW_DROP:
      return {...state, showDrop: !state.showDrop};
    case HISTORY_MODEL:
      return {...state, historyModel};
    default:
      return state;
  }
}

export default consoleReqHistory;
