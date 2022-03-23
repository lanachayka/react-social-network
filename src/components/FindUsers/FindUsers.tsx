import React from 'react'
import { FilterType } from '../../redux/findUsersReducer'
import { UserType } from '../../types/types'
import Pagination from '../common/Pagination/Pagination'
import User from './User/User'
import UserSearchForm from './UsersSeacrhForm/UsersSearchForm'

type PropsType = {
  totalUsersCount: number,
  pageSize: number,
  onPageChanged: (p: number) => void,
  currentPage: number,
  users: UserType[],
  followingInProgress: number[],
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  onFilterChanged: (filter: FilterType) => void
}

const FindUsers: React.FC<PropsType> = (props) => {
  return (
    <div>
      <UserSearchForm onFilterChanged={props.onFilterChanged}/>
      <Pagination
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
      />
      {props.users.map((user: UserType) => (
        <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default FindUsers;
