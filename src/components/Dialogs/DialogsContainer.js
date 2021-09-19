import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
    newMessageText: state.messages.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessage: (text)=>{
      dispatch(updateNewMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
