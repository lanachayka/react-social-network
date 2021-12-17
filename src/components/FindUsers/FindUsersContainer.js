import { connect } from "react-redux";
import React, { Component } from "react";
import FindUsers from "./FindUsers";
import {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers
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

class FindUsersContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {currentPage, pageSize, requestUsers} = this.props;
    requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {setCurrentPage, requestUsers, pageSize} = this.props;
    setCurrentPage(pageNumber);
    requestUsers(pageNumber, pageSize);
  };

  render() {
    const {isFetching} = this.props;
    return (
      <>
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

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(connect(
  mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers
})
)(FindUsersContainer)
