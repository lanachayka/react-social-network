import React, { useState } from 'react'

export default function Status(props) {

    const [editMode, setEditMode] = useState(false);

    return (
        <>
            {!editMode
                ? <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
                : <input
                    autoFocus={true}
                    defaultValue={props.status}
                    onBlur={() => setEditMode(false)}
                  ></input>}
        </>
    )
}
