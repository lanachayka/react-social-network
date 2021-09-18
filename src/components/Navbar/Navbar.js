import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import st from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={st.nav}>
      <NavLink to="/profile" activeClassName={st.active} className={st.item}>
        PROFILE
      </NavLink>
      <NavLink to="/dialogs" activeClassName={st.active} className={st.item}>
        MESSAGES
      </NavLink>
      <NavLink to="/news" activeClassName={st.active} className={st.item}>
        NEWS
      </NavLink>
      <NavLink to="/music" activeClassName={st.active} className={st.item}>
        MUSIC
      </NavLink>
      <br />
      <NavLink to="/settings" activeClassName={st.active} className={st.item}>
        SETTINGS
      </NavLink>
      <FriendsContainer />
    </nav>
  );
}
