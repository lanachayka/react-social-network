import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import {createField, Input} from '../common/FormsControls/FormsControls'
import st from './Login.module.css'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
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

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={st.wrapper} onSubmit={handleSubmit}>
            {createField('Login', 'email', [requiredField], Input, {}, '', st.input)}
            {createField('Password', 'password', [requiredField], Input, {}, '', st.input)}
            <div className={st.inline}>
                {createField('', 'rememberMe', [], Input, { type: 'checkbox' })}
                <p>Remember me</p>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, {}, '', st.input)}
            {error && <div className={st.formSummaryError}>{error}</div>}
            <button className={st.btn}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login, logout })(Login);
