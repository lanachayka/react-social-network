import React from 'react'
import st from './User.module.css'
import userPhoto from '../../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types'
import { useDispatch } from 'react-redux'
import { follow, unfollow } from '../../../redux/findUsersReducer'

type PropsType = {
  followingInProgress: number[],
  user: UserType
}

const User: React.FC<PropsType> = ({ followingInProgress, user }) => {
  const dispatch = useDispatch()
  return (
        <div className={st.user}>
          <div className={st.container}>
            <NavLink to={`./profile/${user.id}`}>
              <img
                className={st.photo}
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt={user.name}
              />
            </NavLink>
            {user.followed ? (
              <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => dispatch(unfollow(user.id))}
                className={st.btn}>
                UNFOLLOW
              </button>
            ) : (
                <button
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => dispatch(follow(user.id))}
                  className={st.btn}>
                FOLLOW
              </button>
            )}
          </div>
          <div className={st.info}>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
          </div>
        </div>)
};

export default User;
