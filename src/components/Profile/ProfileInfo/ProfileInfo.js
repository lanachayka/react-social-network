import React from "react";
import st from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status/Status";

export default function ProfileInfo({profile, updateProfileStatus, status}) {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={st.info}>
      <div className={st.description}>
      <img
        className={st.avatar}
        src={
          profile.photos.small
            ? profile.photos.small
            : "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
        }
        alt="Avatar"
      />
        <h1 className={st.title}>{profile.fullName}</h1>
        <p className={st.text}>{profile.aboutMe}</p>
        <p className={st.text}>
          <Status
            updateProfileStatus={updateProfileStatus}
            status={status}
          />
        </p>
      </div>
      <ul>
        <h3>Contacts:</h3>
        {profile.contacts.facebook && (
          <li>
            <a className={st.link} href={profile.contacts.facebook}>Facebook</a>
          </li>
        )}
        {profile.contacts.website && (
          <li>
            <a className={st.link} href={profile.contacts.website}>Website</a>
          </li>
        )}
        {profile.contacts.vk && (
          <li>
            <a className={st.link} href={profile.contacts.vk}>VK</a>
          </li>
        )}
        {profile.contacts.twitter && (
          <li>
            <a className={st.link} href={profile.contacts.twitter}>Twitter</a>
          </li>
        )}
        {profile.contacts.instagram && (
          <li>
            <a className={st.link} href={profile.contacts.instagram}>Instagram</a>
          </li>
        )}
        {profile.contacts.youtube && (
          <li>
            <a className={st.link} href={profile.contacts.youtube}>Youtube</a>
          </li>
        )}
        {profile.contacts.github && (
          <li>
            <a className={st.link} href={profile.contacts.github}>Github</a>
          </li>
        )}
        {profile.contacts.mainLink && (
          <li>
            <a className={st.link} href={profile.contacts.mainLink}>Main Link</a>
          </li>
        )}
      </ul>
    </div>
  );
}
