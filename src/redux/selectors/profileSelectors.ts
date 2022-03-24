import { AppStateType } from '../reduxStore';

export const getPostsData = (state: AppStateType) => {
    return state.profile.postsData
}

export const getStatus = (state: AppStateType) => {
    return state.profile.status
}

export const getProfile = (state: AppStateType) => {
    return state.profile.profile
}
