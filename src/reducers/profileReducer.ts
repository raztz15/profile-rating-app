import { actionTypes } from "../constants/action-types";

const initialState = {};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROFILES:
      console.log("state ===> ", state);
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
