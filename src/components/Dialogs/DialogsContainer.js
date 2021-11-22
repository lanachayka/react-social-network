import {
  sendMessage,
  updateNewMessage,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
    newMessageText: state.messages.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    updateNewMessage,
  }),
  withAuthRedirect
)(Dialogs);
