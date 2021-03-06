import { ResultCodes } from './../api/api'
import { InferActionsTypes, ThunkType } from './reduxStore'
import { UserType } from '../types/types'
import { userAPI } from '../api/users-api'
import { updateObjectInArray } from '../utils/object-helpers'
import { Dispatch } from 'redux'

const initialState = {
  users: [] as UserType[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
  filter: {
    term: '',
    friend: null as null | boolean
  }
}

export const actions = {
  followSuccess: (userId: number) => ({ type: 'findUsers/FOLLOW_SUCCESS', userId } as const),

  unfollowSuccess: (userId: number) => ({ type: 'findUsers/UNFOLLOW_SUCCESS', userId } as const),

  setUsers: (users: UserType[]) => ({ type: 'findUsers/SET_USERS', users } as const),

  setCurrentPage: (pageNumber: number) => ({
    type: 'findUsers/SET_CURRENT_PAGE',
    pageNumber,
  } as const),

  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'findUsers/SET_TOTAL_USERS_COUNT',
    count: totalUsersCount,
  } as const),

  setIsFetching: (isFetching: boolean) => ({
    type: 'findUsers/SET_IS_FETCHING',
    isFetching: isFetching,
  } as const),
  setFollowingProgress: (isFollowing: boolean, userId: number) => ({
    type: 'findUsers/SET_FOLLOWING_PROGRESS',
    isFollowing: isFollowing,
    userId: userId
  } as const),
  setFilter: (filter: FilterType) => ({
    type: 'findUsers/SET_FILTER',
    payload: filter
  } as const)
}

export type InitialStateType = typeof initialState

export type FilterType = typeof initialState.filter

type ActionsTypes = InferActionsTypes<typeof actions>

export const findUsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'findUsers/FOLLOW_SUCCESS': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      };
    }
    case 'findUsers/UNFOLLOW_SUCCESS': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      };
    }
    case 'findUsers/SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'findUsers/SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.pageNumber }
    }
    case 'findUsers/SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'findUsers/SET_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'findUsers/SET_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    case 'findUsers/SET_FILTER': {
      return {
        ...state,
        filter: action.payload
      }
    }
    default:
      return state
  }
}

export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType<ActionsTypes> => async (dispatch) => {
  dispatch(actions.setIsFetching(true))
  dispatch(actions.setCurrentPage(page))
  dispatch(actions.setFilter(filter))
  const data = await userAPI.getUsers(page, pageSize, filter.term, filter.friend)
  dispatch(actions.setIsFetching(false))
  dispatch(actions.setUsers(data.items))
  dispatch(actions.setTotalUsersCount(data.totalCount))
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, apiMethod: any, userId: number, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.setFollowingProgress(true, userId))
  const data = await apiMethod(userId)
  if (data.resultCode === ResultCodes.Succsess) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.setFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType<ActionsTypes> => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userAPI.follow.bind(userAPI), userId, actions.followSuccess)
}

export const unfollow = (userId: number): ThunkType<ActionsTypes> => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userAPI.unfollow.bind(userAPI), userId, actions.unfollowSuccess)
}

export default findUsersReducer
