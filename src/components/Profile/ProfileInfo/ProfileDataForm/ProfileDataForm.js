import { reduxForm } from "redux-form";
import { createField, Input, TextArea } from "../../../common/FormsControls/FormsControls";
import st from "../ProfileInfo.module.css";
import style from '../../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSumbit, profile, error}) => {
    return (
        <form onSubmit={handleSumbit}>
            <div>
                <div><button>Save</button></div>
                {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                    <b>Full Name</b>: {createField("Full Name", "fullName", [], Input)}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: "checkbox"})}
                </div>
                <div>
                    <b>My professional skils</b>: {createField('My professional skils', 'lookingForAJobDescription', [], TextArea)}
                </div>
                <div>
                    <b>About me</b>: {createField("About me", "aboutMe", [], TextArea)}
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

export default reduxForm({ form: 'edit-profile' })(ProfileDataForm);