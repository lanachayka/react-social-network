import React from 'react'
import st from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${st.formControl} ${hasError && st.error}`}>
            {props.children}
            {hasError && <div><span>{meta.error}</span></div>}
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
            <input {...input} {...restProps}></input>
        </FormControl>
    )
}