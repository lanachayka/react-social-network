import { ResultCodes, ResultCodeForCaptcha } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxStore';
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

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getAuth = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me()
    if (meData.resultCode === ResultCodes.Succsess) {
        const { id, email, login } = meData.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string) => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodes.Succsess) {
        dispatch(getAuth());
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(data.url));
}

export const logout = (): ThunkType => async (dispatch) => {
    const logoutData = await authAPI.logout()
    if (logoutData.resultCode === ResultCodes.Succsess) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

