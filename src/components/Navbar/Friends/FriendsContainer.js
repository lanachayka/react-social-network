import React from "react";
import Friends from "./Friends";


export default function FriendsContainer(props) {

  const state = props.store.getState();

  return (
    <Friends friends={state.navbar.friends}/>
  );
}
