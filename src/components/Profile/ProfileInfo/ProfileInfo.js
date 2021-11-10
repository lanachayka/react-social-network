import React from "react";
import st from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={st.info}>
      <div className={st.description}>
      <img
        className={st.avatar}
        src={
          props.profile.photos.small
            ? props.profile.photos.small
            : "https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
        }
        alt="Avatar"
      ></img>
        <h1 className={st.title}>{props.profile.fullName}</h1>
        <p className={st.text}>{props.profile.aboutMe}</p>
      </div>
      <ul>
        <h3>Contacts:</h3>
        {props.profile.contacts.facebook && (
          <li>
            <a href={props.profile.contacts.facebook}>Facebook</a>
          </li>
        )}
        {props.profile.contacts.website && (
          <li>
            <a href={props.profile.contacts.website}>Website</a>
          </li>
        )}
        {props.profile.contacts.vk && (
          <li>
            <a href={props.profile.contacts.vk}>VK</a>
          </li>
        )}
        {props.profile.contacts.twitter && (
          <li>
            <a href={props.profile.contacts.twitter}>Twitter</a>
          </li>
        )}
        {props.profile.contacts.instagram && (
          <li>
            <a href={props.profile.contacts.instagram}>Instagram</a>
          </li>
        )}
        {props.profile.contacts.youtube && (
          <li>
            <a href={props.profile.contacts.youtube}>Youtube</a>
          </li>
        )}
        {props.profile.contacts.github && (
          <li>
            <a href={props.profile.contacts.github}>Github</a>
          </li>
        )}
        {props.profile.contacts.mainLink && (
          <li>
            <a href={props.profile.contacts.mainLink}>Main Link</a>
          </li>
        )}
      </ul>
    </div>
  );
}
