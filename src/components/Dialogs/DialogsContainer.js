import {
  sendMessage,
  updateNewMessage,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
    newMessageText: state.messages.newMessageText,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessage,
})(withAuthRedirect(Dialogs));

export default DialogsContainer;
