import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";

const rootReducers = combineReducers({
  allProfiles: profileReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
