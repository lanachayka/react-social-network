import React from 'react'
import st from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={`${st.formControl} ${hasError && st.error}`}>
            {children}
            {hasError && <div><span>{error}</span></div>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>)
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export const createField = (className, name, type, component, placeholder, validate) => {
    return <Field
        className={className}
        name={name}
        type={type}
        component={component}
        placeholder={placeholder}
        validate={validate}/>
}