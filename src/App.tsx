import React, { useEffect } from 'react'
import { BrowserRouter, Route, withRouter, Redirect, Switch, Link } from 'react-router-dom'
// Redux
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import store from './redux/reduxStore'
import { getAppInitialized } from './redux/selectors/appSelectors'
//Styles
import './App.css'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
// Components
import Navbar from './components/Navbar/Navbar'
// import Header from './components/Header/Header'
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

  const { SubMenu } = Menu
  const { Header, Content, Footer, Sider } = Layout

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/developers">Developers</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                <Menu.Item key="1">
                  <Link to="/profile">
                    PROFILE
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/dialogs">
                    MESSAGES
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                <Menu.Item key="5">
                  <Link to="/developers">
                    Developers
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <React.Suspense fallback={Preloader}>
              <Switch>
                <Route
                  exact path="/react-social-network"
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
                <Route path="/developers" render={() => <FindUsers pageTitle="React Social Network Users" />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/login" render={() => <Login />} />
              </Switch>
            </React.Suspense>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    // <div className="app-wrapper">
    //   <Header />
    //   <Navbar />
    //   <div className="app-wrapper-content">
    //     <React.Suspense fallback={Preloader}>
    //       <Switch>
    //         <Route
    //           exact path="/"
    //           render={() => <Redirect to="/profile" />}
    //         />
    //         <Route
    //           path="/profile/:userId?"
    //           render={() => <ProfileContainer />}
    //         />
    //         <Route
    //           path="/dialogs"
    //           render={() => <Dialogs />}
    //         />
    //         <Route path="/news" render={() => <News />} />
    //         <Route path="/music" render={() => <Music />} />
    //         <Route path="/users" render={() => <FindUsers pageTitle="React Social Network Users" />} />
    //         <Route path="/settings" render={() => <Settings />} />
    //         <Route path="/login" render={() => <Login />} />
    //       </Switch>
    //     </React.Suspense>
    //   </div>
    // </div>
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
