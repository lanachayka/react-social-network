const state = {
  profile: {
    postsData: [
      { id: 1, message: "Hi? how are you?", likeCount: 0 },
      { id: 2, message: "It's my first post!", likeCount: 23 },
    ],
    newPostText: ""
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

let rerenderEntireTree = (state) => {
  console.log("State changed");
};

export const addPost = () => {
  const newPost = {
    id: state.profile.postsData[state.profile.postsData.length - 1] + 1,
    message: state.profile.newPostText,
    likeCount: 0,
  };
  state.profile.postsData.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
 rerenderEntireTree = observer;
}

export default state;
