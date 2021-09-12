import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = (state, addPost, updateNewPostText) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

