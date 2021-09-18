import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

export default function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {store => (
        <Dialogs
          dialogsData={store.getState().messages.dialogsData}
          messagesData={store.getState().messages.messagesData}
          newMessageText={store.getState().messages.newMessageText}
          sendMessage={() => store.dispatch(sendMessageActionCreator())}
          updateNewMessage={(text) =>
            store.dispatch(updateNewMessageActionCreator(text))
          }
        />
      )}
    </StoreContext.Consumer>
  );
}
