import React, { useEffect } from 'react'
import { BrowserRouter, Route, withRouter, Redirect, Switch } from 'react-router-dom'
// Redux
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import store from './redux/reduxStore'
import { getAppInitialized } from './redux/selectors/appSelectors'
//Styles
import './App.css'
// Components
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Preloader from './components/common/Preloader/Preloader'
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/Music/Music'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))
const FindUsers = React.lazy(() => import('./components/FindUsers/FindUsers'))

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [])

  const initialized = useSelector(getAppInitialized)

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <Header />
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
              render={() => <Dialogs />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <FindUsers pageTitle="React Social Network Users" />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </React.Suspense>
      </div>
    </div>
  )
}

const AppContainer = compose<React.ComponentType>(withRouter)(App);

const SocialNetworkApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialNetworkApp
