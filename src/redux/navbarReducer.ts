import { FriendType } from './../types/types';
const initialState = {
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
  ] as FriendType[],
};

type InitialStateType = typeof initialState;

const navbarReducer = (state = initialState): InitialStateType => {
  return state;
};

export default navbarReducer;
