import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return { ...state, ...action.payload }
        }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        userId: userId, email: email, login: login, isAuth: isAuth
    }
});

export const getAuth = () => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
                dispatch(getAuth());
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

