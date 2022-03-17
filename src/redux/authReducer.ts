import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState;

type ActionType = setAuthUserDataActionType | getCaptchaUrlSuccessActionType

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return { ...state, ...action.payload }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return { ...state, ...action.payload }
        } 
        default: return state
    }
}

type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: {
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        userId: userId, email: email, login: login, isAuth: isAuth
    }
});

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl: string
    }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {
        captchaUrl: captchaUrl
    }
});

export const getAuth = () => async (dispatch: any) => {
    const data: any = await authAPI.me()
    if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const response: any = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response: any = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    const response:any = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

