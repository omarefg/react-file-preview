import React from 'react'

export const Error = props => (
    <div>
        {props.errorComponent
            ? <props.errorComponent {...props}/>
            : <p>Unable to preview file</p>}
    </div>
)
