import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from './MyPosts';


export default function MyPostsContainer(props) {

  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      postsData={state.profile.postsData}
      newPostText={state.profile.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
}
