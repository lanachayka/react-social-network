import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;