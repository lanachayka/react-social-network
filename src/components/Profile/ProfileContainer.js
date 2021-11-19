import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId === undefined ? userId = '2' : userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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

const WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithURLDataProfileContainer);
