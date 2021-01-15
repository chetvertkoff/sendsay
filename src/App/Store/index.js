import Vue from 'vue'
import Vuex from 'vuex'
import consoleReqHistory from './modules/consoleReqHistory'
import consoleRequest from './modules/consoleRequest'
import { MODAL } from './types'

Vue.use(Vuex);

//state
const state = {
  modal: {
    showModal:false,
    title: '',
    actionId: null
  }
}

//actions
const actions = {
  showModal({commit}, val) {
    commit(MODAL, val);
  },
  closeModal({commit}) {
    commit(MODAL, {
      showModal:false,
      title: '',
      actionId: null
    });
  }
}

//mutations
const mutations = {
  [MODAL](state, val) {
    state.modal = val;
  }
}

export default new Vuex.Store({
  mutations,
  actions,
  state,
  modules: {
    consoleReqHistory,
    consoleRequest
  }
})