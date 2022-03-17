import React from "react";
import Dialog from "./Dialog/Dialog";
import st from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, requiredField } from "../../utils/validators/validators";
import { TextArea } from "../common/FormsControls/FormsControls";
import {DialogType, MessageType } from '../../types/types'

type DialogsPropsType = {
  dialogsData: DialogType[],
  messagesData: MessageType[],
  sendMessage: (newMessage: string) => void
}

type FormDataType = {
  newMessage: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const onSubmit: any = (formData: FormDataType) => {
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
        <MessageReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

const maxLength50 = maxLength(50);

const MessageForm: React.FC<InjectedFormProps> = (props) => {
  return (
    <form className={st.add} onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        className={st.textArea}
        placeholder="Your message..."
        name="newMessage"
        validate={[requiredField, maxLength50]}
      ></Field>
      <button className={st.btn}>
        Send message
      </button>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: "message" })(MessageForm);

export default Dialogs;