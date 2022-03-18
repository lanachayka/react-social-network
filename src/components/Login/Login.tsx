import React from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import {createField, Input, GetStringKeys} from '../common/FormsControls/FormsControls'
import st from './Login.module.css'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/reduxStore'

type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

type MapDispacthProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void,
    logout: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispacthProps

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

const Login: React.FC<PropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        const { email, password, rememberMe, captcha } = formData;
        login(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (<div className={st.wrapper}>
        <h1 className={st.text}>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>)
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={st.wrapper} onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Login', 'email', [requiredField], Input, {}, '', st.input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [requiredField], Input, {}, '', st.input)}
            <div className={st.inline}>
                {createField<LoginFormValuesTypeKeys>('', 'rememberMe', [], Input, { type: 'checkbox' })}
                <p>Remember me</p>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, {}, '', st.input)}
            {error && <div className={st.formSummaryError}>{error}</div>}
            <button className={st.btn}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: "login" })(LoginForm);

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect<MapStatePropsType, MapDispacthProps, unknown, AppStateType>(mapStateToProps, { login, logout })(Login);
