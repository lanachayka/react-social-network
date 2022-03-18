import { AppStateType } from './../redux/reduxStore';
export type UserType = {
    id: number,
    name: string,
    status: string
    photos: PhotosType
    followed: boolean
}

export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
    id: number,
    userName: string,
    photo: string
}

export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string
    },
}

export type FriendType = {
    id: number,
    name: string,
    photo: string
}

export type GetStateType = () => AppStateType;