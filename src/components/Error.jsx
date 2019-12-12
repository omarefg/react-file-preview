import React from 'react'
import { ErrorStyles } from '../styles/Error'

export const Error = ({ ErrorComponent }) => {
    return (
        <ErrorStyles>
            <div className='container'>
                {ErrorComponent ?
                    <ErrorComponent/> :
                    <p className='alert'>Unable to preview file</p>}
            </div>
        </ErrorStyles>
    )
}
