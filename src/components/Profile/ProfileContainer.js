import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    userId === undefined ? userId = this.props.authorizedUserId : userId = this.props.match.params.userId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getProfileInfo(userId);
    this.props.getProfileStatus(userId);
  }
  
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId);
    this.refreshProfile();
  }

  render() {
    return (
        <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhoto}
        />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  connect(mapStateToProps, { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
