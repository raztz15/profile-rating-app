import { Dispatch } from "@reduxjs/toolkit";
import { userLogin } from "../services/LoginService";
import { actionTypes } from "../constants/action-types";

export const loginUserAction = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const user = await userLogin(email, password)
            dispatch({ type: actionTypes.USER_LOGIN, payload: user.user })
        } catch (error) {
            console.log("Couldn't log in this user ===> ", error);
        }
    }
}