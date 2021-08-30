import React from 'react'
import logo from "./logo.svg";
import st from "./Header.module.css";

export default function Header() {
  return (
    <header className={st.header}>
        <img className={st.logo} src={logo}></img>
      </header>
    );
}
