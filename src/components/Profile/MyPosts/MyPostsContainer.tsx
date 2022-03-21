import { actions } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    postsData: state.profile.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: actions.addPost,
})(MyPosts);

export default MyPostsContainer;
