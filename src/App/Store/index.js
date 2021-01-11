import Vue from 'vue'
import Vuex from 'vuex'
import consoleReqHistory from './modules/consoleReqHistory'

Vue.use(Vuex);

const state = {
  count: 0
}

export default new Vuex.Store({
  state,
  modules: {
    consoleReqHistory
  }
})