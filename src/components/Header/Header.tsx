import React from 'react'
import logo from './logo.svg'
import st from './Header.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  isAuth: boolean,
  login: string | null,
  logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
  return (
    <header className={st.header}>
      <img className={st.logo} src={logo} alt="logo"></img>
      <div className={st.loginBlock}>
        {isAuth
          ? <div className={st.wrapper}>
            <p className={st.login}>{login}</p>
            <button className={st.btn} onClick={logout}>LogOut</button>
          </div>
          : <NavLink className={st.login} to="./login">Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;