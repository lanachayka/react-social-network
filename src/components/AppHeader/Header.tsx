import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import { Menu, Row, Col, Layout, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { getIsAuth, getLogin } from '../../redux/selectors/authSelectors'

const AppHeader: React.FC = () => {
  const dispatch = useDispatch()
  const login = useSelector(getLogin)
  const isAuth = useSelector(getIsAuth)
  return (
    <Layout.Header>
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to="/developers">Developers</Link>
            </Menu.Item>
          </Menu>
        </Col>
        {isAuth
          ? <>
            <Col span={1}>
              <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}></Avatar>
            </Col>
            <Col span={5}>
              <Button onClick={dispatch(logout)}>LogOut</Button>
            </Col>
          </>
          : <Col span={6} >
            <Button>
              <Link to="./login">Login</Link>
            </Button>
          </Col>
        }
      </Row>
    </Layout.Header>
  )
}

export default AppHeader;