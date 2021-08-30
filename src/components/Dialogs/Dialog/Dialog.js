import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Dialog.module.css";

export default function Dialog(props) {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      activeClassName={st.active}
      className={st.dialog}
    >
      <div className={st.user}>
        <img className={st.img} src={props.photo}></img>
      {props.userName}
      </div>
    </NavLink>
  );
}



