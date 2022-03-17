import React from 'react'
import st from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../types/types';

type PropsType = {
  profile: ProfileType | null,
  status: string,
  updateProfileStatus: (status: string) => void,
  isOwner: boolean,
  savePhoto: (file: any) => void,
  saveProfile: (profile: ProfileType) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
      <div>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
          saveProfile={props.saveProfile}
        />
        <MyPostsContainer />
      </div>
    );
}

export default Profile
