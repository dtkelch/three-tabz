import { SET_ACTIVE_TAB } from "../constants";

export default (state = {}, action: any) => {
  switch (action.type) {
   case SET_ACTIVE_TAB:
    return {
      ...state,
     activeTab: action.payload
    }
   default:
    return state
  }
 }