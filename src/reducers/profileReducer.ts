import { actionTypes } from "../constants/action-types";
import { ProfileDataModel } from "../data-models/Profile";
import { IProfile } from "../interfaces/profilesInterfaces";

interface IProfileData {
  profiles: { data: ProfileDataModel[] };
}

const initialState: IProfileData = {
  profiles: {
    data: [],
  },
};

export const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROFILES:
      return { ...state, profiles: { data: action.payload.data } };
    case actionTypes.EDIT_PROFILE:
      const updatedProfile = action.payload;
      const updatedProfiles = state.profiles.data.map((profile) => {
        if (profile._id === updatedProfile._id) return updatedProfile;
        else return profile;
      });
      return { ...state, profiles: { data: updatedProfiles } };
    case actionTypes.CREATE_NEW_PROFILE:
      const profile = action.payload;
      const allProfiles = state.profiles.data.push(profile);
      return { ...state, profiles: { data: allProfiles } };
    default:
      return state;
  }
};
