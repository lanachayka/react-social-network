import React from 'react'
// Components
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'
// Types
import { DialogType, MessageType } from '../../types/types'
// Styles
import st from './Dialogs.module.css'

export type DialogsPropsType = {
  dialogsData: DialogType[],
  messagesData: MessageType[],
  sendMessage: (newMessage: string) => void
}

type FormDataType = {
  newMessage: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const onSubmit = (formData: FormDataType) => {
    props.sendMessage(formData.newMessage);
  }

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        {props.dialogsData.map((item) => (
          <Dialog
            key={item.id}
            id={item.id}
            userName={item.userName}
            photo={item.photo}
          />
        ))}
      </div>
      <div className={st.messages}>
        {props.messagesData.map((item) => (
          <Message key={item.id} message={item.message} />
        ))}
        <AddMessageForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

export default Dialogs;
