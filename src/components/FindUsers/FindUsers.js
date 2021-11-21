import React from "react";
import st from "./FindUsers.module.css";
import userPhoto from "../../assets/img/user.jpg";
import { NavLink } from "react-router-dom";

export default function FindUsers(props) {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={st.buttons}>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => props.onPageChanged(p)}
            className={
              props.currentPage === p ? st.smallbtnActive : st.smallbtn
            }
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={st.user}>
          <div className={st.container}>
            <NavLink to={`./profile/${u.id}`}>
              <img
                className={st.photo}
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt={u.name}
              />
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => props.unfollow(u.id)}
                className={st.btn}>
                UNFOLLOW
              </button>
            ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => props.follow(u.id)}
                  className={st.btn}>
                FOLLOW
              </button>
            )}
          </div>
          <div className={st.info}>
            <h3>{u.name}</h3>
            <p>{u.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
