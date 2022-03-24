import React, { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../../../redux/selectors/profileSelectors'
import { updateProfileStatus } from '../../../../redux/profileReducer'

const Status: React.FC = () => {
    const statusFromState = useSelector(getStatus)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(statusFromState)

    const dispatch = useDispatch()

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateProfileStatus(status))
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
    };

    useEffect(() => {
        setStatus(statusFromState)
    }, [statusFromState])

    return (
        <>
            {!editMode
                ? <><b>Status</b>: <span onDoubleClick={activateEditMode}>{statusFromState || "----------"}</span></>
                : <input
                    autoFocus={true}
                    defaultValue={status}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                />}
        </>
    )
}

export default Status
