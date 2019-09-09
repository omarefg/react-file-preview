import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { usePhoto } from '../hooks/photo'

export const Photo = props => {
    const { containerStyles, container } = usePhoto(props)
    const { ErrorComponent, onError } = props

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div
                ref={container}
                style={containerStyles}
            />
        </ErrorBoundary>
    )
}
