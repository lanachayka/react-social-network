import React from 'react'
import st from "./MyPosts.module.css";
import Post from './Post/Post';

export default function MyPosts(props) {
  return (
    <div>
      <div className={st.myposts}>
        <h2 className={st.title}>MY POSTS</h2>
        <textarea
          className={st.textArea}
          placeholder="Start your story..."
        ></textarea>
        <button className={st.btn}>Add post</button>
      </div>
      <div className={st.posts}>
        {props.postsData.map((item) => (
          <Post key={item.id} message={item.message} likeCount={item.likeCount} />
        ))}
      </div>
    </div>
  );
}
