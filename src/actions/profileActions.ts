import { actionTypes } from "../constants/action-types";
import { ProfileDataModel } from "../data-models/Profile";

export const setProfiles = (profiles: Array<ProfileDataModel>) => {
  return { type: actionTypes.SET_PROFILES, payload: profiles };
};

export const selectedProfile = (profile: ProfileDataModel) => {
  return { type: actionTypes.SELECTED_PTOFILE, payload: profile };
};

// export const removeSelectedProfile = (profile: ProfileDataModel) => {
//   return { type: actionTypes.REMOVE_SELECTED_PTOFILE, payload: profile };
// };
