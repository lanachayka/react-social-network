import React from "react";
import st from "./Post.module.css";

export default function Post(props) {
    return (
      <div className={st.post}>
        <div className={st.item}>
          <img
            className={st.photo}
            src="https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
            alt="Avatar example"
          ></img>
          <p>{props.message}</p>
        </div>
        <button className={st.btn}>Like {props.likeCount}</button>
      </div>
    );
}
