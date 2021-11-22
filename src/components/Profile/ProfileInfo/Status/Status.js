import React, { useState } from 'react'

export default function Status(props) {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);
    
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (event) => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <>
            {!editMode
                ? <span onDoubleClick={activateEditMode}>{props.status || "----------"}</span>
                : <input
                    autoFocus={true}
                    defaultValue={status}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                  ></input>}
        </>
    )
}
