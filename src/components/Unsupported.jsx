import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import '../styles/unsupported.scss'

export const Unssuported = props => {
    const { UnssuportedComponent, ErrorComponent, type, onError } = props

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                {UnssuportedComponent ?
                    <UnssuportedComponent/> : (
                        <p>
                            <b>{`.${type} `}</b>
                            is not supported.
                        </p>
                    )}
            </div>
        </ErrorBoundary>
    )
}
