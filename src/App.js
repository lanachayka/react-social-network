import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import React, { Component } from 'react'
import {connect, Provider} from "react-redux";
import { initializeApp } from "./redux/appReducer"
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const FindUsersContainer = React.lazy(() => import('./components/FindUsers/FindUsersContainer'));

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
                <React.Suspense fallback={Preloader}>
                  <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer/>}
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
                </React.Suspense>
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
