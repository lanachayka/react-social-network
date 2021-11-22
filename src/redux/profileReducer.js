import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

const initialState = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ],
  newPostText: "",
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
            message: state.newPostText,
            likeCount: 0,
          },
        ],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_PROFILE_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const getProfileInfo = (userId) => (dispatch) => {
  profileAPI.getProfileInfo(userId).then(data => {
    dispatch(setUserProfile(data));
  })
}

export const getProfileStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setProfileStatus(data));
  })
}

export const updateProfileStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setProfileStatus(status));
    }
  }
  )
}

export default profileReducer;