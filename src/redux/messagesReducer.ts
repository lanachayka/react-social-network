import { MessageType, DialogType } from "../types/types";

const SEND_MESSAGE = "messages/SEND-MESSAGE";

const initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
  ] as MessageType[],
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
  ] as DialogType[],
};

type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: sendMessageActionType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: state.messagesData[state.messagesData.length - 1].id + 1,
            message: action.newMessage,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default messagesReducer;

type sendMessageActionType = {
  type: typeof SEND_MESSAGE,
  newMessage: string
}

export const sendMessage = (newMessage: string): sendMessageActionType => ({ type: SEND_MESSAGE, newMessage: newMessage});

