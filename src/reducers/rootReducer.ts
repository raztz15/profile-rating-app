import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { useDispatch } from "react-redux";
import store from "../store/store";

const rootReducers = combineReducers({
  allProfiles: profileReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
