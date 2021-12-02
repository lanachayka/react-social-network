export const requiredField = (value) => {
    return value ? undefined : "Field is required"
}

export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Max length is ${max} symbols` : undefined
}