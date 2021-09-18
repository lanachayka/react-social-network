import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from '../../../storeContext';
import MyPosts from './MyPosts';


export default function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {store => (
        <MyPosts
          postsData={store.getState().profile.postsData}
          newPostText={store.getState().profile.newPostText}
          addPost={() => {
            store.dispatch(addPostActionCreator());
          }}
          updateNewPostText={(text) => {store.dispatch(updateNewPostTextActionCreator(text))}}
        />
      )}
    </StoreContext.Consumer>
  );
}
