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
        "https://social-network.samuraijs.com/api/1.0/users",
        {
          headers: {
            "API-KEY": "d4193994-fff7-4712-976d-d1bc0305c9fc",
          },
        }
      )
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div>
        <div className={st.buttons}>
          <button className={st.smallbtn}>1</button>
          <button className={st.smallbtn}>2</button>
          <button className={st.smallbtn}>3</button>
          <button className={st.smallbtn}>4</button>
          <button className={st.smallbtn}>5</button>
        </div>
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
