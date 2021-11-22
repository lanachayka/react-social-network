import React from "react";
import Dialog from "./Dialog/Dialog";
import st from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {

  let newMessageElement = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
  };
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessage(text);
  };


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
        <div className={st.add}>
          <textarea
            value={props.newMessageText}
            onChange={onMessageChange}
            ref={newMessageElement}
            className={st.textArea}
            placeholder="Your message..."
          ></textarea>
          <button onClick={onSendMessage} className={st.btn}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
