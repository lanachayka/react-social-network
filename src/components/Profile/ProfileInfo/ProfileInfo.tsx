import React, { useState } from "react";
import st from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status/Status";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import { ProfileType, ContactsType } from "../../../types/types";

type PropsType = {
  profile: ProfileType | null,
  updateProfileStatus: (status: string) => void,
  status: string,
  isOwner: boolean,
  savePhoto: (file: File) => void,
  saveProfile: (profile: ProfileType) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, updateProfileStatus, status, isOwner, savePhoto, saveProfile}) => {
  
  const [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.lenght) {
      savePhoto(e.target.files[0]);
    }
  }
  const onSubmit = async (formData: ProfileType) => {
    await saveProfile(formData)
    setEditMode(false);
  }
  const photo = profile.photos.large || profile.photos.small
  return (
    <div>
      <div>
      <img
        className={st.avatar}
        src={
          photo
            ? photo 
            : "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
        }
        alt="Avatar"
        />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
        <Status
            updateProfileStatus={updateProfileStatus}
            status={status}
          />
      </div>
    </div>
  );
}

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean,
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner &&
        <div><button onClick={goToEditMode}>Edit</button></div>}
      <div>
        <b>Full Name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skils</b>: {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
          <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        ))}
      </div>
    </div>
  )
}

type ContactPropsType = {
  contactTitle: string,
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={st.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>)
}

export default ProfileInfo;
