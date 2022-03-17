import { connect } from "react-redux";
import React, { Component } from "react";
import FindUsers from "./FindUsers";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers,
} from "../../redux/findUsersReducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount
} from "../../redux/findUsersSelectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  users: UserType[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: number[],
}

type MapDispatchPropsType = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FindUsersContainer extends Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize, requestUsers} = this.props;
    requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const {requestUsers, pageSize} = this.props;
    requestUsers(pageNumber, pageSize);
  };

  render() {
    const {isFetching, pageTitle} = this.props;
    return (
      <>
        <h2>{pageTitle}</h2>
        {isFetching ? (
          <Preloader />
        ) : (
          <FindUsers
            onPageChanged={this.onPageChanged}
            {...this.props}
          />
        )}
      </>
    );
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
  };
};

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers
})
)(FindUsersContainer)
