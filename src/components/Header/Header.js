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
          ? <p className={st.login}>{props.login}</p>
          : <NavLink className={st.login} to="./login">Login</NavLink>
        }
      </div>
    </header>
  );
}
