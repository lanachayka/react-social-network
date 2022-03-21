import { UserType } from './../types/types';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f406f314-0e27-4ae0-9815-6188b0f3b0b0'
    }
})

export enum ResultCodes {
    Succsess = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

export type ResponseType<D ={}, RC=ResultCodes> = {
    data: D,
    resultCode: RC,
    messages: string[],
}






