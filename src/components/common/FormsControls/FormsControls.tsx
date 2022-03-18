import React from 'react'
import st from './FormsControls.module.css'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { FieldValidatorType } from '../../../utils/validators/validators';

type FormControlType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl: React.FC<FormControlType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;

    return (
        <div className={`${st.formControl} ${hasError && st.error}`}>
            {children}
            {hasError && <div><span>{error}</span></div>}
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return (<FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>)
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string>
    (
        placeholder: string,
        name: FormKeysType,
        validators: FieldValidatorType[],
        component: React.FC<WrappedFieldProps>,
        props = {},
        text: string = "",
        className: string = "") {
    return (
        <div>
            <Field
                className={className}
                name={name}
                component={component}
                placeholder={placeholder}
                validate={validators}
                {...props} /> {text}
        </div>)
}

export type GetStringKeys<T> = Extract<keyof T, string>