const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
    {
      id: 1,
      photo:
        "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
      fullName: "Dmitry K.",
      followed: true,
      status: "I am looking for a job rigth now",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photo:
        "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
      fullName: "Svetlana D.",
      followed: true,
      status: "I am so pretty!",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photo:
        "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
      fullName: "Sergei S.",
      followed: false,
      status: "I like football!",
      location: { city: "London", country: "England" },
    },
    {
      id: 4,
      photo:
        "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",
      fullName: "Andrew T.",
      followed: false,
      status: "I am free to help you to create Video Prodaction",
      location: { city: "Kiev", country: "Ukraine" },
    },
  ],
};

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        };
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          }),
        };
      }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
      }
      default:
        return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default findUsersReducer;
