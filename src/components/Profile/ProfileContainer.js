import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo, getProfileStatus, updateProfileStatus } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId === undefined ? userId = '2' : userId = this.props.match.params.userId;
    this.props.getProfileInfo(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
        <div>
          <Profile {...this.props} profile={this.props.profile} />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
  };
};

export default compose(
  connect(mapStateToProps, { getProfileInfo, getProfileStatus, updateProfileStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)