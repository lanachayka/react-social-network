import profileReducer from './profileReducer'
import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";

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
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
