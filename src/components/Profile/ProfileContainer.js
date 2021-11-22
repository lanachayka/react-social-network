import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfo } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId === undefined ? userId = '2' : userId = this.props.match.params.userId;
    this.props.getProfileInfo(userId);
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
  };
};

const WithURLDataProfileContainer = withRouter(withAuthRedirect(ProfileContainer));

export default connect(mapStateToProps, { getProfileInfo })(WithURLDataProfileContainer);
