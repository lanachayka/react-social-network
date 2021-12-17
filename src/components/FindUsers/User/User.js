import React from "react";
import st from "./User.module.css";
import userPhoto from "../../../assets/img/user.jpg";
import { NavLink } from "react-router-dom";

export default function User({followingInProgress, follow, unfollow, user}) {
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
                onClick={() => unfollow(user.id)}
                className={st.btn}>
                UNFOLLOW
              </button>
            ) : (
                <button
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={() => follow(user.id)}
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
