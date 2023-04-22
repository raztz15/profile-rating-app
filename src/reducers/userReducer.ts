import { actionTypes } from "../constants/action-types";
import { UserDataModel } from "../data-models/User";
import { getLoggedinUser } from "../services/LoginService";

interface IUserData {
    currentUser: UserDataModel | null
}

const initialState: IUserData = {
    currentUser: getLoggedinUser() || null
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return { ...state, currentUser: action.payload }
        default:
            return state
    }
}