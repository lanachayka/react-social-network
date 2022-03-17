import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {ProfileType} from '../../types/types'
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  profile: ProfileType | null,
  status: string,
  authorizedUserId: number | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  getProfileInfo: (userId: number) => void,
  getProfileStatus: (userId: number) => void,
  updateProfileStatus: (status: string) => void,
  savePhoto: (file: any) => void,
  saveProfile: (profile: ProfileType) => void
}

type OwnPropsType = {
  match: any,
  history: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
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

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.refreshProfile();
    };
  }

  render() {
    return (
        <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
        </div>
      );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
