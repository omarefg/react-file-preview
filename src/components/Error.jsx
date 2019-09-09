import React from 'react'

export const Error = ({ ErrorComponent }) => {
    return (
        <div>
            {ErrorComponent ?
                <ErrorComponent/> :
                <p>Unable to preview file</p>}
        </div>
    )
}
