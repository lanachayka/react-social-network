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
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          headers: {
            "API-KEY": "d4193994-fff7-4712-976d-d1bc0305c9fc",
          },
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount-15100);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          headers: {
            "API-KEY": "d4193994-fff7-4712-976d-d1bc0305c9fc",
          },
        }
      )
      .then((response) => this.props.setUsers(response.data.items));
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div className={st.buttons}>
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => this.onPageChanged(p)}
              className={
                this.props.currentPage === p ? st.smallbtnActive : st.smallbtn
              }
            >
              {p}
            </button>
          ))}
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
