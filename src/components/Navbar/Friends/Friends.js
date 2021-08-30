import React from "react";
import st from "./Friends.module.css";

export default function Friends(props) {
  return (
    <div>
      <h3 className={st.title}>FRIENDS</h3>
      {props.friends.map((item) => (
        <div key={item.id} className={st.friends}>
          <div className={st.friend}>
            <img className={st.img} src={item.photo}></img>
                  <p className={st.text}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
