import { SET_ACTIVE_TAB } from "../constants";

export const setActiveTab = (tabNumber: number) => {
    return {
        payload: tabNumber,
        type: SET_ACTIVE_TAB,
    }
}