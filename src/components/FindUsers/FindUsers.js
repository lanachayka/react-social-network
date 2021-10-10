import axios from "axios";
import React, { Component } from "react";
import st from "./FindUsers.module.css";
import userPhoto from "../../assets/img/user.jpg";

export default class FindUsers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/users?API-KEY=d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f"
      )
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id} className={st.user}>
            <div className={st.container}>
              <img
                className={st.photo}
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt={u.name}
              />
              {u.followed ? (
                <button
                  onClick={() => this.props.unfollow(u.id)}
                  className={st.btn}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => this.props.follow(u.id)}
                  className={st.btn}
                >
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
  }
}
