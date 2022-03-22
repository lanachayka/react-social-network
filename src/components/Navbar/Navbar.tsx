import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer'
import st from './Navbar.module.css'
import search from './search_white.svg'

const Navbar: React.FC = () => {
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
      <NavLink to="/users" activeClassName={st.active} className={st.item}>
        <div className={st.icon}>
          <img src={search} alt="serach icon"/>
          USERS
        </div>
      </NavLink>
      <br />
      <NavLink to="/settings" activeClassName={st.active} className={st.item}>
        SETTINGS
      </NavLink>
      <FriendsContainer />
    </nav>
  );
}

export default Navbar
