import { connect } from "react-redux";
import React, { Component } from "react";
import FindUsers from "./FindUsers";
import axios from "axios";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/findUsersReducer";
import Preloader from "../common/Preloader/Preloader";

class FindUsersContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials:true})
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `, { withCredentials: true})
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
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
