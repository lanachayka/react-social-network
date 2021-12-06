import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.findUsers.users
};

// Приклад складного селектора стовореного за допомогою бібліотеки reselect

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
});

// -----------------------------------------------------------------------

export const getPageSize = (state) => {
    return state.findUsers.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.findUsers.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.findUsers.currentPage
};

export const getIsFetching = (state) => {
    return state.findUsers.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.findUsers.followingInProgress
};