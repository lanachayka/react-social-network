import React from 'react'
import st from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
    return (
      <div>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />
        <MyPostsContainer />
      </div>
    );
}
