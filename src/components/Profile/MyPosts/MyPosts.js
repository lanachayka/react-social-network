import React from 'react'
import st from "./MyPosts.module.css";
import Post from './Post/Post';

export default function MyPosts(props) {

  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={st.myposts}>
        <h2 className={st.title}>MY POSTS</h2>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={st.textArea}
          placeholder="Start your story..."
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost} className={st.btn}>
          Add post
        </button>
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
