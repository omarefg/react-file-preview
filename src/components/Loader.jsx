import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { LoaderStyles } from '../styles/Loader'

export const Loader = ({ ErrorComponent, onError }) => {
    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <LoaderStyles>
                <div className='container'>
                    <span className='loader'/>
                </div>
            </LoaderStyles>
        </ErrorBoundary>
    )
}

