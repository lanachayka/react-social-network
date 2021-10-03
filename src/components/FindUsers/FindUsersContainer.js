import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/findUsersReducer";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) => {
  return { users: state.findUsers.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followAC(userid));
    },
    unfollow: (userid) => {
      dispatch(unfollowAC(userid));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsers);

export default FindUsersContainer;
