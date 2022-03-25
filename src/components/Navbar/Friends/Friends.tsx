import React from 'react'
import { useSelector } from 'react-redux';
import { getFriends } from '../../../redux/selectors/navbarSelectors';
import st from './Friends.module.css'

const Friends: React.FC = () => {
  const friends = useSelector(getFriends)
  return (
    <div>
      <h3 className={st.title}>FRIENDS</h3>
      {friends.map((item) => (
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
