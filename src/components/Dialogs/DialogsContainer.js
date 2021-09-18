import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

export default function DialogsContainer(props) {

  const state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  const updateNewMessage = (text) => {
     props.store.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <Dialogs
      dialogsData={state.messages.dialogsData}
      messagesData={state.messages.messagesData}
      newMessageText={state.messages.newMessageText}
      sendMessage={sendMessage}
      updateNewMessage={updateNewMessage}
    />
  );
}
