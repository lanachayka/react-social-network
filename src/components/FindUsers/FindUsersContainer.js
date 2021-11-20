import { connect } from "react-redux";
import React, { Component } from "react";
import FindUsers from "./FindUsers";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/findUsersReducer";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class FindUsersContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <FindUsers
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
})(FindUsersContainer);
