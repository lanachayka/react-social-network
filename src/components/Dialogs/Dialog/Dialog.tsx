import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Dialog.module.css";

type ProsType = {
  id: number
  userName: string
  photo: string
}

const Dialog: React.FC<ProsType> = ({id, userName, photo}) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      activeClassName={st.active}
      className={st.dialog}
    >
      <div className={st.user}>
        <img className={st.img} src={photo} alt="Avatar example"></img>
        {userName}
      </div>
    </NavLink>
  );
}

export default Dialog;



