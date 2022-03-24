import React from 'react'
// Components
import Post from './Post/Post'
import AddPostForm from './AddPostForm/AddPostForm'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getPostsData } from '../../../redux/selectors/profileSelectors'
import {actions} from '../../../redux/profileReducer'
// Styles
import st from './MyPosts.module.css'

type MyPostsFormValuesType = {
  newPost: string,
}

const MyPosts: React.FC = () => {
  const postsData = useSelector(getPostsData)
  const dispatch = useDispatch()

  const onAddPost = (formData: MyPostsFormValuesType) => {
    dispatch(actions.addPost(formData.newPost))
  }

  return (
    <div>
      <div className={st.myposts}>
        <h2 className={st.title}>MY POSTS</h2>
        <AddPostForm onSubmit={onAddPost}/>
      </div>
      <div className={st.posts}>
        {postsData.map((item) => (
          <Post
            key={item.id}
            message={item.message}
            likeCount={item.likeCount}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPosts
