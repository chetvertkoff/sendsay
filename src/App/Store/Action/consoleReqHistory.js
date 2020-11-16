import { SHOW_DROP } from "../types";

export const toggleDrop = (bool)=>({
  type: SHOW_DROP,
  payload: bool
})