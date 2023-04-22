import { actionTypes } from "../constants/action-types";

const initialState = {
    isAuth: false,
    token: null
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.tpe) {
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, isAuth: true, token: action.payload.token }
        case actionTypes.LOGIN_FAILURE:
        case actionTypes.LOGOUT:
            return { ...state, isAuth: false, token: null }
        default:
            return state
    }
}