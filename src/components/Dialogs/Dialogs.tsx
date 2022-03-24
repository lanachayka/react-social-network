import React from 'react'
// Components
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'
// Styles
import st from './Dialogs.module.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/messagesReducer'
import { getDialogsData, getMessagesData } from '../../redux/selectors/messagesSelector'
import { compose } from 'redux'
// HOC
import withAuthRedirect from '../../hoc/withAuthRedirect'

type FormDataType = {
  newMessage: string
}

const Dialogs: React.FC = () => {

  const dialogsData = useSelector(getDialogsData)
  const messagesData = useSelector(getMessagesData)

  const dispatch = useDispatch()

  const onSubmit = (formData: FormDataType) => {
    dispatch(actions.sendMessage(formData.newMessage))
  }

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        {dialogsData.map((item) => (
          <Dialog
            key={item.id}
            id={item.id}
            userName={item.userName}
            photo={item.photo}
          />
        ))}
      </div>
      <div className={st.messages}>
        {messagesData.map((item) => (
          <Message key={item.id} message={item.message} />
        ))}
        <AddMessageForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

export default compose<React.ComponentType>(withAuthRedirect)(Dialogs);
