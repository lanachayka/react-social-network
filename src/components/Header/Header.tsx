import React from 'react'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
// Styles
import st from './Header.module.css'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { getIsAuth, getLogin } from '../../redux/selectors/authSelectors'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const login = useSelector(getLogin)
  const isAuth = useSelector(getIsAuth)
  return (
    <header className={st.header}>
      <img className={st.logo} src={logo} alt="logo"></img>
      <div className={st.loginBlock}>
        {isAuth
          ? <div className={st.wrapper}>
            <p className={st.login}>{login}</p>
            <button className={st.btn} onClick={dispatch(logout)}>LogOut</button>
          </div>
          : <NavLink className={st.login} to="./login">Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;