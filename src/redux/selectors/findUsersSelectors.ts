import { AppStateType } from '../reduxStore'
import { createSelector } from 'reselect'

export const getUsers = (state:AppStateType) => {
    return state.findUsers.users
}

// Приклад складного селектора стовореного за допомогою бібліотеки reselect

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})

// -----------------------------------------------------------------------

export const getPageSize = (state: AppStateType) => {
    return state.findUsers.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.findUsers.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.findUsers.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.findUsers.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.findUsers.followingInProgress
}

export const getFindUsersFilter = (state: AppStateType) => {
    return state.findUsers.filter
}