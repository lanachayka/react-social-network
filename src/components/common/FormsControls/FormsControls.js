import React from 'react'
import st from './FormsControls.module.css'

export const TextArea = ({ input, meta, ...props }) => {
    
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${st.formControl} ${hasError && st.error}`}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`${st.formControl} ${hasError && st.error}`}>
            <input {...input} {...props}></input>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}