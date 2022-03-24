import { InjectedFormProps, reduxForm } from 'redux-form'
import { requiredField } from '../../../utils/validators/validators'
import { createField, Input, GetStringKeys } from '../../common/FormsControls/FormsControls'
import st from '../Login.module.css'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form className={st.wrapper} onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Login', 'email', [requiredField], Input, {}, '', st.input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [requiredField], Input, {}, '', st.input)}
            <div className={st.inline}>
                {createField<LoginFormValuesTypeKeys>('', 'rememberMe', [], Input, { type: 'checkbox' })}
                <p>Remember me</p>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, {}, '', st.input)}
            {error && <div className={st.formSummaryError}>{error}</div>}
            <button className={st.btn}>Login</button>
        </form>
    )
}

export default reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: "login" })(LoginForm);