import React from 'react'
import { FriendType } from '../../../types/types'
import st from './Friends.module.css'

type PropsType = {
  friends: FriendType[]
}

const Friends: React.FC<PropsType> = (props) => {
  return (
    <div>
      <h3 className={st.title}>FRIENDS</h3>
      {props.friends.map((item) => (
        <div key={item.id} className={st.friends}>
          <div className={st.friend}>
            <img className={st.img} src={item.photo} alt="Avatar example"></img>
            <p className={st.text}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Friends
