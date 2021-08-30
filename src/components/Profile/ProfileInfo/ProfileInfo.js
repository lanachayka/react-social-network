import React from "react";
import st from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={st.info}>
      <img
        className={st.avatar}
        src="https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
      ></img>
      <div className={st.description}>
        <h1 className={st.title}>USER NAME</h1>
        <p className={st.text}>About Me</p>
      </div>
    </div>
  );
}
