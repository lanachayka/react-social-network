import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import st from './Login.module.css'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router'

const Login = (props) => {
    const onSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (<div className={st.wrapper}>
        <h1 className={st.text}>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const LoginForm = (props) => {
    return (
        <form className={st.wrapper} onSubmit={props.handleSubmit}>
            <Field className={st.input} name="email" component={Input} placeholder="Login" validate={[requiredField]}/>
            <Field className={st.input} name="password" type="password" component={Input} placeholder="Password" validate={[requiredField]}/>
            <div className={st.inline}>
                <Field component="input" type="checkBox" name="remeberMe"></Field>
                <p>Remember Me</p>
            </div>
            <button className={st.btn}>Login</button>
        </form>)
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => {
    return {isAuth:state.auth.isAuth}
}

export default connect(mapStateToProps, { login, logout })(Login);
