import React from 'react'
import { Formik, Form, Field } from 'formik'
import { FilterType } from '../../../redux/findUsersReducer'

const userSearchFormValidate = () => {
    const errors = {}
    return errors
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type UserFormValueType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

const UserSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
    const submit = (values: UserFormValueType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend:
                values.friend === 'null'
                    ? null
                    : values.friend === 'true'
                    ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null' }}
                validate={userSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UserSearchForm