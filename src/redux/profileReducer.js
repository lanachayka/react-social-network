const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postsData: [
    { id: 1, message: "Hi? how are you?", likeCount: 0 },
    { id: 2, message: "It's my first post!", likeCount: 23 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.postsData[state.postsData.length - 1] + 1,
        message: state.newPostText,
        likeCount: 0,
      };
      const stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
