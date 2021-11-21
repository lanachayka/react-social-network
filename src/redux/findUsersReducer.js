import { userAPI } from '../api/api'

const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_PROGRESS = "SET_FOLLOWING_PROGRESS";

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
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW_SUCCESS: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
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

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));
  userAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
}

export const follow = (userId) => (dispatch) => {
  dispatch(setFollowingProgress(true, userId));
  userAPI.follow(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(setFollowingProgress(false, userId));
    });
}

export const unfollow = (userId) => (dispatch) => {
  dispatch(setFollowingProgress(true, userId));
  userAPI.unfollow(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setFollowingProgress(false, userId));
    });
}

export default findUsersReducer;
