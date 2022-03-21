import { PhotosType, ProfileType } from './../types/types';
import { instance, ResponseType } from './api';
import { AxiosResponse } from 'axios';

type UpdateStatusRequestType = {
    status: string
}

type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfileInfo(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusRequestType, AxiosResponse<ResponseType>>(`profile/status`, { status: status })
            .then(response => response.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<typeof formData, AxiosResponse<ResponseType<SavePhotoResponseType>>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ProfileType, AxiosResponse<ResponseType>>(`profile`, profile)
            .then(response => response.data);
    }
}