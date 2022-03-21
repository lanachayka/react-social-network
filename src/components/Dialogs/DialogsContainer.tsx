import { actions } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    sendMessage: actions.sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
