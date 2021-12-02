import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import st from './Login.module.css'

export default function Login() {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (<div className={st.wrapper}>
        <h1 className={st.text}>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

const LoginForm = (props) => {
    return (
        <form className={st.wrapper} onSubmit={props.handleSubmit}>
            <Field className={st.input} name="login" component={Input} placeholder="Login" validate={[requiredField]}/>
            <Field className={st.input} name="password" component={Input} placeholder="Password" validate={[requiredField]}/>
            <div className={st.inline}>
                <Field component="input" type="checkBox" name="remeberMe"></Field>
                <p>Remember Me</p>
            </div>
            <button className={st.btn}>Login</button>
        </form>)
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);