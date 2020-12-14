import { MODAL } from "../types";

export const showModal = val => ({type:MODAL, payload: val});

export const closeModal = () =>  {
  return {type: MODAL, payload: {
    showModal:false,
    title: '',
    actionId: null
  }};
}