import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { useDispatch } from "react-redux";
import store from "../store/store";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

const rootReducers = combineReducers({
  currentUser: userReducer,
  allProfiles: profileReducer,
  auth: authReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
