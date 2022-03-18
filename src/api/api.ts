import { ProfileType, UserType, PhotosType } from './../types/types';
import axios, { AxiosResponse } from "axios";

export enum ResultCodes {
    Succsess = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f406f314-0e27-4ae0-9815-6188b0f3b0b0"
    }
})

type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string
}

type FollowResponseType = {
    resultCode: ResultCodes,
    messages: string[],
    data: {}
}

type FollowRequestType = {
    userId: number
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post<FollowRequestType, AxiosResponse<FollowResponseType>>(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete<FollowRequestType, AxiosResponse<FollowResponseType>>(`follow/${id}`)
            .then(response => response.data);
    },
}

type GetProfileInfoResponseType = ProfileType

type GetStatusResponseType = string

type UpdateStatusResponseType = {
    resultCode: ResultCodes,
    messages: string[],
    data: {}
}

type UpdateStatusRequestType = {
    status: string
}

type SaveProfileResponseType = {
    resultCode: ResultCodes,
    messages: string[],
    data: {}
}

type SaveProfileRequestType = ProfileType

export const profileAPI = {
    getProfileInfo(userId: number | null) {
        return instance.get<GetProfileInfoResponseType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<GetStatusResponseType>(`profile/status/${userId}`)
        .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put <UpdateStatusRequestType, AxiosResponse<UpdateStatusResponseType>>(`profile/status`, { status: status })
        .then(response => response.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<SaveProfileRequestType, AxiosResponse<SaveProfileResponseType>>(`profile`, profile)
            .then(response => response.data);
    }
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodes,
    messages: string[]
}

type LoginResponseType = {
    data: {
        userId: number,
    },
    resultCode: ResultCodes | ResultCodeForCaptcha,
    messages: string[]
}

type LoginRequestType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe=false, captcha: null | string = null) {
        return instance.post <LoginRequestType, AxiosResponse<LoginResponseType>>(`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
            .then(response => response.data);
    },
    logout() {
        return instance.delete<LoginResponseType>(`auth/login`)
            .then(response => response.data);
    }
}

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
            .then(response => response.data);
    }
}
