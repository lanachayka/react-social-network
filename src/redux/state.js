const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const store = {
  _state: {
    profile: {
      postsData: [
        { id: 1, message: "Hi? how are you?", likeCount: 0 },
        { id: 2, message: "It's my first post!", likeCount: 23 },
      ],
      newPostText: "",
    },
    messages: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
      ],
      newMessageText: "",
      dialogsData: [
        {
          id: 1,
          userName: "Dimych",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 2,
          userName: "Max",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 3,
          userName: "Anna",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 4,
          userName: "Sveta",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 5,
          userName: "Sasha",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 6,
          userName: "Victor",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
      ],
    },
    navbar: {
      friends: [
        {
          id: 1,
          name: "Dimych",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 2,
          name: "Max",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          photo:
            "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id:
            this._state.profile.postsData[
              this._state.profile.postsData.length - 1
            ] + 1,
          message: this._state.profile.newPostText,
          likeCount: 0,
        };
        this._state.profile.postsData.push(newPost);
        this._state.profile.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profile.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        const newMessage = {
          id:
            this._state.messages.messagesData[
              this._state.messages.messagesData.length - 1
            ] + 1,
          message: this._state.messages.newMessageText,
        };
        this._state.messages.messagesData.push(newMessage);
        this._state.messages.newMessageText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_MESSAGE:
        this._state.messages.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: newMessage,
});


export default store;
