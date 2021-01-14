import Sendsay from 'sendsay-api'
import ResHistory from '../../utils/ResHistory' 
import { REQ_DATA, RES_DATA, REQ_ERR, RES_ERR, REQ_LOADING } from '../types';

const sendsay = new Sendsay();

//state
const state = {
  reqData: {},
  resData: {},
  reqErr: false,
  resErr: false,
  loading: false
}

//getters
const getters = {
  
}

//actions
const actions = {
  setReqData({commit}, val) {
    commit('REQ_DATA', val);
  },
  setReqErr({commit}, val) {
    commit('REQ_ERR', val);
  },
  async sendReqData({commit}, val) {
    const parseReq = JSON.parse(val);
    let isErr = false;
    let res;
  
    commit('REQ_LOADING', true);
    try {
      sendsay.setSessionFromCookie();
      res = await sendsay.request({...parseReq}); 
      commit('RES_ERR', false);
    } catch (error) {
      if(error.id?.split('/')[1] === "auth"){
        commit('REQ_LOADING', false);
        return "logout";
      };
      res = error;
      isErr = true;
    }
    if(res.sublogin) delete res.sublogin;
    commit('RES_DATA', res);
    commit('RES_ERR', isErr);
  
    parseReq.actionId = '_' + Math.random().toString(36).substr(2, 9);
    const reqHistory = ResHistory.writeResHistory(parseReq, isErr);

    if(reqHistory){
      commit('REQ_HISTORY', reqHistory, { root: true });
    }
  }
}

//mutations
const mutations = {
  [REQ_DATA](state, val) {
    state.reqData = val;
  },
  [RES_DATA](state, val) {
    state.resData = val;
    state.loading = false;
  },
  [REQ_ERR](state, val) {
    state.reqErr = val;
  },
  [RES_ERR](state, val) {
    state.resErr = val;
  },
  [REQ_LOADING](state, val) {
    state.loading = val;
  }
}

export default {
  namespaces: true,
  state,
  getters,
  actions,
  mutations
}