import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { requiredField } from '../../../../utils/validators/validators'
import { createField, GetStringKeys, Input } from '../../../common/FormsControls/FormsControls'

type PropsType = {

}

export type AddPostFormValuesType = {
    newPost: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Your post", 'newPost', [requiredField], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({ form: 'profile-add-post' })(AddPostForm)