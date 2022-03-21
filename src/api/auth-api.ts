import { ResultCodes, ResultCodeForCaptcha, instance, ResponseType } from './api';
import { AxiosResponse } from 'axios';

type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}

type loginLogoutDataType = {
    userId: number
}

type LoginRequestType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginRequestType,
            AxiosResponse<ResponseType<loginLogoutDataType, ResultCodes | ResultCodeForCaptcha>>>
            (`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
            .then(response => response.data);
    },
    logout() {
        return instance.delete<ResponseType<loginLogoutDataType>>(`auth/login`)
            .then(response => response.data);
    }
}