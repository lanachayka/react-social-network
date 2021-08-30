import React from "react";
import Dialog from "./Dialog/Dialog";
import st from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {
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
      </div>
    </div>
  );
}
