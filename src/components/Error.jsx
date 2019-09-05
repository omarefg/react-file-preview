import React from 'react'
import '../styles/error.scss'

export const Error = props => (
    <div className='error-message'>
        {props.errorComponent
            ? <props.errorComponent {...props} />
            : <p className='alert'>Unable to preview file</p>}
    </div>
)
