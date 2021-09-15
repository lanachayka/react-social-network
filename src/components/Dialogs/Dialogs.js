import React from "react";
import { sendMessageActionCreator, updateNewMessageActionCreator } from "../../redux/state";
import Dialog from "./Dialog/Dialog";
import st from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {

   let newMessageElement = React.createRef();

   const sendMessage = () => {
     props.dispatch(sendMessageActionCreator());
  };
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        {props.dialogs.dialogsData.map((item) => (
          <Dialog
            key={item.id}
            id={item.id}
            userName={item.userName}
            photo={item.photo}
          />
        ))}
      </div>
      <div className={st.messages}>
        {props.dialogs.messagesData.map((item) => (
          <Message key={item.id} message={item.message} />
        ))}
        <div className={st.add}>
          <textarea
            value={props.dialogs.newMessageText}
            onChange={onMessageChange}
            ref={newMessageElement}
            className={st.textArea}
            placeholder="Your message..."
          ></textarea>
          <button onClick={sendMessage} className={st.btn}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
