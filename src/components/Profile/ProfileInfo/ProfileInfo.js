import React, { useState } from "react";
import st from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status/Status";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

export default function ProfileInfo({profile, updateProfileStatus, status, isOwner, savePhoto, saveProfile}) {
  
  const [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.lenght) {
      savePhoto(e.target.files[0]);
    }
  }
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }
  return (
    <div>
      <div>
      <img
        className={st.avatar}
        src={
          profile.photos.large
            ? profile.photos.large
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

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
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
          <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        ))}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={st.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>)
}

