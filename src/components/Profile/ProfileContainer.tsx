import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
// Components
import Profile from './Profile'
// Redux
import { connect } from 'react-redux'
import { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile } from '../../redux/profileReducer'
import { compose } from 'redux'
import { AppStateType } from '../../redux/reduxStore'
// Types
import { ProfileType } from '../../types/types'
// HOC
import withAuthRedirect from '../../hoc/withAuthRedirect'

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

type PathParamsType = {
  userId: string
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    if (!userId) {
      console.error("ID should exists in URI params or in state ('authorizedUserId')");
    } else {
      this.props.getProfileInfo(userId)
      this.props.getProfileStatus(userId)
    }
  }
  
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    };
  }

  componentWillUnmount(): void {
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfileInfo, getProfileStatus, updateProfileStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
