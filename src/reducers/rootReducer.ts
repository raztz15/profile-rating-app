import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";

export const rootReducers = combineReducers({
  allProfiles: profileReducer,
});
