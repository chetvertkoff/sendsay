import { MODAL } from "../types";

export const showModal = val => dispatch => dispatch({type:MODAL, payload: val});

export const closeModal = () => dispatch => {
  dispatch({type: MODAL, payload: {
    showModal:false,
    title: '',
    item: null
  }});
}