import React, { useState, useEffect, ChangeEvent } from 'react'

type PropsType = {
    status: string,
    updateProfileStatus: (status: string) => void
}

const Status: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    const activateEditMode = () => {
        setEditMode(true);
        console.log(props.status);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
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

export default Status
