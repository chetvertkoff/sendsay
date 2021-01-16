import { REQ_HISTORY } from './../types';
import ResHistory from '../../utils/ResHistory'

//state
const state = {
  reqHistoryData: ResHistory.historyItems
}

//getters
const getters = {
  reqHistoryData: state => state.reqHistoryData
}

//actions
const actions = {
  setReqHistoryData({commit}, val) {
    commit('REQ_HISTORY', val);
  }
}

//mutations
const mutations = {
  [REQ_HISTORY](state, val) {
    state.reqHistoryData = val;
  }
}

export default {
  namespaces: true,
  state,
  getters,
  actions,
  mutations
}