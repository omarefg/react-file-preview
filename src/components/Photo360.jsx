import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { usePhoto360 } from '../hooks/photo360'

export const Photo360 = props => {
    const { style, ErrorComponent, onError } = props
    const { onMouseMove, onMouseUp, onMouseDown, container } = usePhoto360(props)

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div
                id='photo360'
                ref={container}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                role='main'
                style={style}
            />
        </ErrorBoundary>
    )
}
