import React from "react";
import st from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./Status/Status";

export default function ProfileInfo({profile, updateProfileStatus, status}) {
  const {facebook, website, vk, twitter, instagram, youtube, github, mainLink} = profile.contacts;
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
        {facebook && (
          <li>
            <a className={st.link} href={facebook}>Facebook</a>
          </li>
        )}
        {website && (
          <li>
            <a className={st.link} href={website}>Website</a>
          </li>
        )}
        {vk && (
          <li>
            <a className={st.link} href={vk}>VK</a>
          </li>
        )}
        {twitter && (
          <li>
            <a className={st.link} href={twitter}>Twitter</a>
          </li>
        )}
        {instagram && (
          <li>
            <a className={st.link} href={instagram}>Instagram</a>
          </li>
        )}
        {youtube && (
          <li>
            <a className={st.link} href={youtube}>Youtube</a>
          </li>
        )}
        {github && (
          <li>
            <a className={st.link} href={github}>Github</a>
          </li>
        )}
        {mainLink && (
          <li>
            <a className={st.link} href={mainLink}>Main Link</a>
          </li>
        )}
      </ul>
    </div>
  );
}
