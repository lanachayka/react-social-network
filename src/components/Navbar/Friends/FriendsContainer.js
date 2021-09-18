import React from "react";
import StoreContext from "../../../storeContext";
import Friends from "./Friends";

export default function FriendsContainer() {
  return (
    <StoreContext.Consumer>
      {store => (<Friends friends={store.getState().navbar.friends} />)}
    </StoreContext.Consumer>
  );
}
