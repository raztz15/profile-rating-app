import { actionTypes } from "../constants/action-types";
import { ProfileDataModel } from "../data-models/Profile";

const initialState = {
  profiles: {
    data: [],
    status: "",
  },
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROFILES:
      console.log("state ===> ", state);
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
