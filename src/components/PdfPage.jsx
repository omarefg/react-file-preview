import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { usePdfPage } from '../hooks'

export const PdfPage = props => {
    const { canvas } = usePdfPage(props)
    const { ErrorComponent, onError } = props

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                <canvas ref={canvas}/>
            </div>
        </ErrorBoundary>
    )
}
