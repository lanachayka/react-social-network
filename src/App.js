import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Component } from 'react'
import {connect, Provider} from "react-redux";
import { initializeApp } from "./redux/appReducer"
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route
                path="/dialogs"
                render={() => <DialogsContainer />}
              />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/users" render={() => <FindUsersContainer />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
  )
}

export default SocialNetworkApp;
