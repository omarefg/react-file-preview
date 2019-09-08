import React from 'react'
import '../styles/unsupported.scss'

export const Unssuported = props => (
    <div>
        <div>
            {props.unsupportedComponent
                ? <props.unsupportedComponent {...props}/>
                : <p><b>{`.${props.fileType}`}</b> is not supported.</p>}
        </div>
    </div>
)
