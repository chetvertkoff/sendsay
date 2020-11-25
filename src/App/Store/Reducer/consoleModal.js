import { MODAL } from "../types";

const initialState = {
  modal: {
    showModal:false,
    title: '',
    actionId: null
  }
}

const consoleModal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL:
      return {...state, modal:action.payload};
    default:
      return state;
  }
}

export default consoleModal;