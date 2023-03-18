import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actionTypes } from "../constants/action-types";
import { ProfileDataModel } from "../data-models/Profile";
import { IProfile } from "../interfaces/profilesInterfaces";
import {
  addProfile,
  editProfile,
  getAllProfiles,
} from "../services/ProfileService";

export const setProfiles = () => {
  return async (dispatch: Dispatch) => {
    try {
      const profiles = await getAllProfiles();
      dispatch({ type: actionTypes.SET_PROFILES, payload: profiles });
    } catch (error) {
      console.log("Couldn't load Profiles ===> ", error);
    }
  };
};

export const editProfileAction = (id: string, body: IProfile) => {
  return async (dispatch: Dispatch) => {
    try {
      editProfile(id, body);
      dispatch({ type: actionTypes.EDIT_PROFILE, payload: body });
    } catch (error) {
      console.log("Couldn't edit profile ===> ", error);
    }
  };
};

export const createProfileAction = (profile: IProfile) => {
  return async (dispatch: Dispatch) => {
    try {
      addProfile(profile);
      dispatch({ type: actionTypes.CREATE_NEW_PROFILE, payload: profile });
    } catch (error) {
      console.log("Couldn't add Profile ===> ", error);
    }
  };
};

export const selectedProfile = (profile: ProfileDataModel) => {
  return { type: actionTypes.SELECTED_PROFILE, payload: profile };
};

// export const removeSelectedProfile = (profile: ProfileDataModel) => {
//   return { type: actionTypes.REMOVE_SELECTED_PTOFILE, payload: profile };
// };
