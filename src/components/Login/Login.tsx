import React from 'react'
import { Redirect } from 'react-router-dom'
// Components
import LoginForm from './LoginForm/LoginForm'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/authReducer'
import { getCaptchaUrl, getIsAuth } from '../../redux/selectors/authSelectors'
// Styles
import st from './Login.module.css'

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

const Login: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const captchaUrl = useSelector(getCaptchaUrl)
    const dispatch = useDispatch()
    
    const onSubmit = (formData: LoginFormValuesType) => {
        const { email, password, rememberMe, captcha } = formData
        dispatch(login(email, password, rememberMe, captcha))
    }

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (<div className={st.wrapper}>
        <h1 className={st.text}>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>)
}

export default Login
