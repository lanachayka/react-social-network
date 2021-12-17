import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";

export default function FindUsers(props) {
  return (
    <div>
      <Pagination
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
      />
      {props.users.map((user) => (
        <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}/>
      ))}
    </div>
  );
};
