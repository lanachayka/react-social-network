import { Component } from 'react'
// Components
import FindUsers from './FindUsers'
import Preloader from '../common/Preloader/Preloader'
// Redux
import { connect } from 'react-redux'
import {actions, follow, unfollow, requestUsers, FilterType} from '../../redux/findUsersReducer'
import { compose } from 'redux'
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getFindUsersFilter
} from '../../redux/findUsersSelectors'
import { AppStateType } from '../../redux/reduxStore'
// Types 
import { UserType } from '../../types/types'

type MapStatePropsType = {
  users: UserType[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: number[],
  filter: FilterType
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FindUsersContainer extends Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, requestUsers, filter} = this.props
    requestUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (pageNumber: number) => {
    const {requestUsers, pageSize, filter} = this.props
    requestUsers(pageNumber, pageSize, filter)
  }

  onFilterChanged = (filter: FilterType) => {
    const { pageSize, requestUsers } = this.props
    requestUsers(1, pageSize, filter)
  }

  render() {
    const {isFetching, pageTitle} = this.props
    return (
      <>
        <h2>{pageTitle}</h2>
        {isFetching ? (
          <Preloader />
        ) : (
          <FindUsers
              onPageChanged={this.onPageChanged}
              onFilterChanged={this.onFilterChanged}
            {...this.props}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getFindUsersFilter(state)
  }
}

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage: actions.setCurrentPage,
  requestUsers
})
)(FindUsersContainer)
