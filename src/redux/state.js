import { rerenderEntireTree } from "../render";

let state = {
  profile: {
    postsData: [
      { id: 1, message: "Hi? how are you?", likeCount: 0 },
      { id: 2, message: "It's my first post!", likeCount: 23 },
    ],
  },
  messages: {
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
    ],
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
};

export const addPost = (postMessage) => {
  const newPost = {
    id: state.profile.postsData[state.profile.postsData.length - 1] + 1,
    message: postMessage,
    likeCount: 0,
  };
  state.profile.postsData.push(newPost);
  rerenderEntireTree(state, addPost);
};

export default state;
