import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLength } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';
import st from "./MyPosts.module.css";
import Post from './Post/Post';

export default function MyPosts(props) {

  const onSubmit = (formData) => {
    props.addPost(formData.newPost);
  }

  return (
    <div>
      <div className={st.myposts}>
        <h2 className={st.title}>MY POSTS</h2>
        <MyPostReduxForm
          onSubmit={onSubmit}
        />
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

const maxLength100 = maxLength(100);

const MyPostForm = (props) => {
  return (<form onSubmit={props.handleSubmit} className={st.form}>
    <Field
      placeholder="Start your story..."
      className={st.textArea}
      component={TextArea}
      name="newPost"
      validate={[requiredField, maxLength100]}
    >
    </Field>
    <button className={st.btn}>
      Add post
    </button>
  </form>)
}

const MyPostReduxForm = reduxForm({ form: "myPost" })(MyPostForm);
