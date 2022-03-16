import React, { useState, useEffect } from 'react'

export default function Status(props) {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
        console.log(props.status);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            {!editMode
                ? <><b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || "----------"}</span></>
                : <input
                    autoFocus={true}
                    defaultValue={status}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                />}
        </>
    )
}
