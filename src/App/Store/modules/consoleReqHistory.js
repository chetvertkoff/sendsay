//state
const state = {
  reqHistoryData: JSON.parse(localStorage.getItem('reqItems')) || []
}

//getters
const getters = {
  reqHistoryData: state => state.reqHistoryData.reverse()
}


export default {
  state,
  getters
}