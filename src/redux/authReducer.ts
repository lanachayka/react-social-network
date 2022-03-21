import { ResultCodes, ResultCodeForCaptcha } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './reduxStore';
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_AUTH_USER_DATA',
        payload: {
            id: userId, email: email, login: login, isAuth: isAuth
        }
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS',
        payload: {
            captchaUrl: captchaUrl
        }
    } as const),
}

type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH_USER_DATA': {
            return { ...state, ...action.payload }
        }
        case 'auth/GET_CAPTCHA_URL_SUCCESS': {
            return { ...state, ...action.payload }
        } 
        default: return state
    }
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuth = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me()
    if (meData.resultCode === ResultCodes.Succsess) {
        const { id, email, login } = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true));
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
    dispatch(actions.getCaptchaUrlSuccess(data.url));
}

export const logout = (): ThunkType => async (dispatch) => {
    const logoutData = await authAPI.logout()
    if (logoutData.resultCode === ResultCodes.Succsess) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

