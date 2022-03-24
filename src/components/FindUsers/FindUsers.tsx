import React, { useEffect } from 'react'
// Components
import Pagination from '../common/Pagination/Pagination'
import User from './User/User'
import UserSearchForm from './UsersSeacrhForm/UsersSearchForm'
import Preloader from '../common/Preloader/Preloader'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { FilterType } from '../../redux/findUsersReducer'
import { getCurrentPage, getFindUsersFilter, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/selectors/findUsersSelectors'
import { requestUsers } from '../../redux/findUsersReducer'
// Types
import { UserType } from '../../types/types'

type PropsType = {
  pageTitle: string
}

const FindUsers: React.FC<PropsType> = ({pageTitle}) => {

  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getUsers)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getFindUsersFilter)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter))
  }, [])
  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }

  return (
    <div>
      <h2>{pageTitle}</h2>
      {isFetching ? (
        <Preloader />
      ) : (
        <>
          <UserSearchForm onFilterChanged={onFilterChanged} />
          <Pagination
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
          {users.map((user: UserType) => (
            <User
              key={user.id}
              user={user}
              followingInProgress={followingInProgress}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default FindUsers;
