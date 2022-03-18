import { reduxForm, InjectedFormProps } from "redux-form";
import { createField, Input, TextArea } from "../../../common/FormsControls/FormsControls";
import st from "../ProfileInfo.module.css";
import style from '../../../common/FormsControls/FormsControls.module.css'
import { ProfileType } from "../../../../types/types";
import { GetStringKeys } from '../../../common/FormsControls/FormsControls'

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div><button>Save</button></div>
                {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                    <b>Full Name</b>: {createField<ProfileTypeKeys>("Full Name", "fullName", [], Input)}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: "checkbox"})}
                </div>
                <div>
                    <b>My professional skils</b>: {createField<ProfileTypeKeys>('My professional skils', 'lookingForAJobDescription', [], TextArea)}
                </div>
                <div>
                    <b>About me</b>: {createField<ProfileTypeKeys>("About me", "aboutMe", [], TextArea)}
                </div>
                {<div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
                        <div key={key} className={st.contact}>
                            <b>{key}</b>: {createField(key, `contacts.${key}`, [], Input)}
                        </div>
                    ))}
                </div>}
            </div>
        </form>
    )
}

export default reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm);