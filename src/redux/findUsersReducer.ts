import { UserType } from '../types/types';
import { userAPI } from '../api/api'
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW_SUCCESS = "findUsers/FOLLOW_SUCCESS";
const UNFOLLOW_SUCCESS = "findUsers/UNFOLLOW_SUCCESS";
const SET_USERS = "findUsers/SET_USERS";
const SET_CURRENT_PAGE = "findUsers/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "findUsers/SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "findUsers/SET_IS_FETCHING";
const SET_FOLLOWING_PROGRESS = "findUsers/SET_FOLLOWING_PROGRESS";

const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[]
};

type InitialStateType = typeof initialState;

type ActionType = FollowSuccessActionType | UnfollowSuccessActionType
  | SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType
  | SetIsFetchingActionType | SetFollowingProgressActionType

const findUsersReducer = (state = initialState, action: ActionType): InitialStateType => {
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

type FollowSuccessActionType = {
  type: typeof FOLLOW_SUCCESS,
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW_SUCCESS, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW_SUCCESS,
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW_SUCCESS, userId });

type SetUsersActionType = {
  type: typeof SET_USERS,
  users: UserType[]
}

export const setUsers = (users: UserType[]): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE,
  pageNumber: number
}

export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  count: number
}

export const setTotalUsersCount = (totalUsersCount:number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

type SetIsFetchingActionType = {
  type: typeof SET_IS_FETCHING,
  isFetching: boolean
}

export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching,
});

type SetFollowingProgressActionType = {
  type: typeof SET_FOLLOWING_PROGRESS,
  isFollowing: boolean,
  userId: number
}

export const setFollowingProgress = (isFollowing: boolean, userId: number): SetFollowingProgressActionType => ({
  type: SET_FOLLOWING_PROGRESS,
  isFollowing: isFollowing,
  userId: userId
});

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(page));
  const data: any = await userAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, apiMethod: any, userId: number, actionCreator: any) => {
  dispatch(setFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userAPI.follow.bind(userAPI), userId, followSuccess);
}

export const unfollow = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userAPI.unfollow.bind(userAPI), userId, unfollowSuccess);
}

export default findUsersReducer;
