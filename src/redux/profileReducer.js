import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_PROFILE_STATUS = "profile/SET_PROFILE_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
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
      return { ...state, profile: { ...state.profile, photos: action.photos} }
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId: postId });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfileInfo = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfileInfo(userId)
  dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setProfileStatus(data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfileInfo(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;