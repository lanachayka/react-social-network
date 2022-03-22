//Components
import Dialogs from './Dialogs';
// redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import { actions } from '../../redux/messagesReducer';
// HOC
import withAuthRedirect from '../../hoc/withAuthRedirect';

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
