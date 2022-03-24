import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
// Components
import Profile from './Profile'
// Redux
import { connect } from 'react-redux'
import { getProfileInfo, getProfileStatus } from '../../redux/profileReducer'
import { compose } from 'redux'
import { AppStateType } from '../../redux/reduxStore'
// HOC
import withAuthRedirect from '../../hoc/withAuthRedirect'

type MapStatePropsType = {
  authorizedUserId: number | null,
  isAuth: boolean
}

type MapDispatchPropsType = {
  getProfileInfo: (userId: number) => void,
  getProfileStatus: (userId: number) => void,
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

  render() {
    return (
        <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
        />
        </div>
      );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfileInfo, getProfileStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
