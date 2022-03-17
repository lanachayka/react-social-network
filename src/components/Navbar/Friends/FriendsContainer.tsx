import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { FriendType } from "../../../types/types";
import Friends from "./Friends";

type MapStatePropsType = {
  friends: FriendType[] 
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    friends: state.navbar.friends
  };
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;