import { REQ_HISTORY } from './../types';

//state
const state = {
  reqHistoryData: JSON.parse(localStorage.getItem('reqItems')) || []
}

//getters
const getters = {
  reqHistoryData: state => state.reqHistoryData.reverse()
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