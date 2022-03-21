import { GetStateType } from './../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './reduxStore';
import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PostType, PhotosType, ProfileType } from "../types/types";

const initialState = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ] as PostType[],
  profile: null as ProfileType | null,
  status: ""
};

export const actions = {
  addPost: (newPostText: string) => ({ type: 'profile/ADD_POST', newPostText: newPostText } as const),

  deletePost: (postId: number) => ({ type: 'profile/DELETE_POST', postId: postId } as const),

  setUserProfile: (profile: ProfileType) => ({ type: 'profile/SET_USER_PROFILE', profile } as const),

  setProfileStatus: (status: string) => ({ type: 'profile/SET_PROFILE_STATUS', status } as const),

  savePhotoSuccess: (photos: PhotosType) => ({ type: 'profile/SAVE_PHOTO_SUCCESS', photos } as const),
}

type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'profile/ADD_POST': {
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
    case 'profile/DELETE_POST': {
      return { ...state, postsData: state.postsData.filter(post => post.id !== action.postId)}
      }
    case 'profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'profile/SET_PROFILE_STATUS': {
      return { ...state, status: action.status }
    }
    case 'profile/SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.photos} as ProfileType }
    }
    default:
      return state;
  }
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProfileInfo = (userId: number | null): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfileInfo(userId)
  dispatch(actions.setUserProfile(data));
}

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(actions.setProfileStatus(data));
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(actions.setProfileStatus(status));
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data: any = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
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