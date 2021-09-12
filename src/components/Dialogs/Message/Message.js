import React from 'react'
import st from "./Message.module.css";

export default function Message(props) {
  return (
      <div className={st.message}>{props.message}</div>
  );
}
