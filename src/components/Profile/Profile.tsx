import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type PropsType = {
  isOwner: boolean,
}

const Profile: React.FC<PropsType> = (props) => {
    return (
      <div>
        <ProfileInfo isOwner={props.isOwner} />
        <MyPosts />
      </div>
    );
}

export default Profile
