import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// Components
import Pagination from '../common/Pagination/Pagination'
import User from './User/User'
import UserSearchForm from './UsersSeacrhForm/UsersSearchForm'
import Preloader from '../common/Preloader/Preloader'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { FilterType } from '../../redux/findUsersReducer'
import {
  getCurrentPage, getFindUsersFilter, getFollowingInProgress,
  getIsFetching, getPageSize, getTotalUsersCount, getUsers
} from '../../redux/selectors/findUsersSelectors'
import { requestUsers } from '../../redux/findUsersReducer'
// Types
import { UserType } from '../../types/types'

type PropsType = {
  pageTitle: string
}

type QueryParamsType = {
  term?: string, page?: string, friend?: string
}

const FindUsers: React.FC<PropsType> = ({pageTitle}) => {

  const totalUsersCount = useSelector(getTotalUsersCount)
  const users = useSelector(getUsers)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getFindUsersFilter)

  const history = useHistory()
  const dispatch = useDispatch()
  const querystring = require('querystring')

  useEffect(() => {
    const parsed: QueryParamsType = querystring.parse(history.location.search.substring(1))

    let actualPage = currentPage
    let actualFilter = filter
    if (!!parsed.page) actualPage = +parsed.page
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term }
    if (!!parsed.friend) actualFilter = {
      ...actualFilter,
      friend: parsed.friend === 'null'
        ? null : parsed.friend === 'true'
        ? true : false
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, [])

  useEffect(() => {
    const query: QueryParamsType = {}
    if (filter.term) query.term = filter.term
    if (filter.friend !== null) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    history.push({
      pathname: '/users',
      search: querystring.stringify(query)
    })
  }, [filter, currentPage])

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

export default FindUsers
