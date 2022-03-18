export type FieldValidatorType = (value: string) => string | undefined

export const requiredField: FieldValidatorType = (value) => {
    return value ? undefined : "Field is required"
}

export const maxLength = (max: number): FieldValidatorType => (value) => {
    return value && value.length > max ? `Max length is ${max} symbols` : undefined
}