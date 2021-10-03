import React from "react";
import st from "./FindUsers.module.css";

export default function FindUsers(props) {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={st.user}>
          <div className={st.container}>
            <img className={st.photo} src={u.photo} alt={u.fullName} />
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)} className={st.btn}>
                UNFOLLOW
              </button>
            ) : (
              <button onClick={() => props.follow(u.id)} className={st.btn}>
                FOLLOW
              </button>
            )}
          </div>
          <div className={st.info}>
            <h3>{u.fullName}</h3>
            <p>{u.status}</p>
          </div>
          <p>
            {u.location.country},<br />
            {u.location.city}
          </p>
        </div>
      ))}
    </div>
  );
}
