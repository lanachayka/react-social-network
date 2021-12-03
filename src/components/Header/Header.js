import React from 'react'
import logo from "./logo.svg";
import st from "./Header.module.css";
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={st.header}>
      <img className={st.logo} src={logo} alt="logo"></img>
      <div className={st.loginBlock}>
        {props.isAuth
          ? <div className={st.wrapper}>
            <p className={st.login}>{props.login}</p>
            <button className={st.btn} onClick={props.logout}>LogOut</button>
          </div>
          : <NavLink className={st.login} to="./login">Login</NavLink>
        }
      </div>
    </header>
  );
}
