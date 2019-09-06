import React from 'react'
import '../styles/unsupported.scss'

export const Unssuported = props => (
    <div className='pg-driver-view'>
        <div className='unsupported-message'>
            {props.unsupportedComponent
                ? <props.unsupportedComponent {...props} />
                : <p className='alert'><b>{`.${props.fileType}`}</b> is not supported.</p>}
        </div>
    </div>
)
