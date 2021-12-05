import { connect } from "react-redux";
import React, { Component } from "react";
import FindUsers from "./FindUsers";
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
} from "../../redux/findUsersReducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class FindUsersContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
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
    users: state.findUsers.users,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    isFetching: state.findUsers.isFetching,
    followingInProgress: state.findUsers.followingInProgress,
  };
};

export default compose(connect(
  mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})
)(FindUsersContainer)
