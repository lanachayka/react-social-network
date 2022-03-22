import React from 'react'
import st from './Post.module.css'

type PropsType = {
  message: string,
  likeCount: number
}

const Post: React.FC<PropsType> = ({message, likeCount}) => {
    return (
      <div className={st.post}>
        <div className={st.item}>
          <img
            className={st.photo}
            src="https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"
            alt="Avatar example"
          ></img>
          <p>{message}</p>
        </div>
        <button className={st.btn}>Like {likeCount}</button>
      </div>
    );
}

export default Post
