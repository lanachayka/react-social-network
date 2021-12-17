import { userAPI } from '../api/api'
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW_SUCCESS = "findUsers/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "findUsers/UNFOLLOW_SUCCESS";
const SET_USERS = "findUsers/SET_USERS";
const SET_CURRENT_PAGE = "findUsers/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "findUsers/SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "findUsers/SET_IS_FETCHING";
const SET_FOLLOWING_PROGRESS = "findUsers/SET_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      };
    }
    case UNFOLLOW_SUCCESS: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW_SUCCESS, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW_SUCCESS, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching,
});

export const setFollowingProgress = (isFollowing, userId) => ({
  type: SET_FOLLOWING_PROGRESS,
  isFollowing: isFollowing,
  userId: userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(page));
  const data = await userAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, apiMethod, userId, actionCreator) => {
  dispatch(setFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userAPI.follow.bind(userAPI), userId, followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
  await followUnfollowFlow(dispatch, userAPI.unfollow.bind(userAPI), userId, unfollowSuccess);
}

export default findUsersReducer;
