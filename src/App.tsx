import React, { Component } from 'react'
import { BrowserRouter, Route, withRouter, Redirect, Switch } from 'react-router-dom'
// Redux
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import store, { AppStateType } from './redux/reduxStore'
//Styles
import './App.css'
// Components
import Navbar from './components/Navbar/Navbar'
import HeaderContainer from './components/Header/HeaderContainer'
import Preloader from './components/common/Preloader/Preloader'
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/Music/Music'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))
const FindUsersContainer = React.lazy(() => import('./components/FindUsers/FindUsersContainer'))

type PropsType = {
  initialized: boolean,
  initializeApp: () => void
}

class App extends Component<PropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
            <Switch>
              <Route
                exact path="/"
                render={() => <Redirect to="/profile" />}
              />
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
              <Route path="/users" render={() => <FindUsersContainer pageTitle="React Social Network Users"/>} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <Login />} />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  }
}

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp;
