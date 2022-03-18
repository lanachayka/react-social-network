import { GetStateType } from './../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxStore';
import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PostType, PhotosType, ProfileType } from "../types/types";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ] as PostType[],
  profile: null as ProfileType | null,
  status: ""
};

type InitialStateType = typeof initialState;

type ActionType = AddPostActionType | DeletPostActionType | SetUserProfileActionType | SetProfilStatusActionType | SavePhotoSuccessActionType

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: state.postsData[state.postsData.length - 1].id + 1,
            message: action.newPostText,
            likeCount: 0,
          },
        ],
      };
    }
    case DELETE_POST: {
      return { ...state, postsData: state.postsData.filter(post => post.id !== action.postId)}
      }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_PROFILE_STATUS: {
      return { ...state, status: action.status }
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos} as ProfileType }
    }
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST,
  newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText: newPostText });

type DeletPostActionType = {
  type: typeof DELETE_POST,
  postId: number
}

export const deletePost = (postId: number): DeletPostActionType => ({ type: DELETE_POST, postId: postId });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetProfilStatusActionType = {
  type: typeof SET_PROFILE_STATUS,
  status: string
}

export const setProfileStatus = (status: string): SetProfilStatusActionType => ({ type: SET_PROFILE_STATUS, status });

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getProfileInfo = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfileInfo(userId)
  dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setProfileStatus(data));
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data: any = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: GetStateType) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getProfileInfo(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
}

export default profileReducer;