import st from './AddMessageForm.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { maxLength, requiredField } from '../../../utils/validators/validators'
import { createField, GetStringKeys, TextArea } from '../../common/FormsControls/FormsControls'

const maxLength50 = maxLength(50);

type AddMessageFormType = {
    newMessage: string
}

type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType, PropsType> & PropsType> = (props) => {
    return (
        <form className={st.add} onSubmit={props.handleSubmit}>
            {createField<GetStringKeys<AddMessageFormType>>('Your message...', 'newMessage', [requiredField, maxLength50], TextArea, {}, '', st.textArea)}
            <button className={st.btn}>
                Send message
            </button>
        </form>
    )
}

export default reduxForm<AddMessageFormType, PropsType>({ form: 'message' })(AddMessageForm);