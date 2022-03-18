import React from 'react'
import { PostType } from '../../../types/types';
import AddPostForm from './AddPostForm/AddPostForm';
import st from "./MyPosts.module.css";
import Post from './Post/Post';

export type MapPropsType = {
  postsData: PostType[]
}
export type DispatchPropsType = {
  addPost: (newPost: string) => void
}

type MyPostsFormValuesType = {
  newPost: string,
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

  const onAddPost = (formData: MyPostsFormValuesType) => {
    props.addPost(formData.newPost);
  }

  return (
    <div>
      <div className={st.myposts}>
        <h2 className={st.title}>MY POSTS</h2>
        <AddPostForm onSubmit={onAddPost}/>
      </div>
      <div className={st.posts}>
        {props.postsData.map((item) => (
          <Post
            key={item.id}
            message={item.message}
            likeCount={item.likeCount}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPosts;
