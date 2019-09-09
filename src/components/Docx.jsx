import React from 'react'
import { Loader } from './Loader'
import { useDocxData } from '../hooks'
import { ErrorBoundary } from './ErrorBoundary'
import { DocxStyles } from '../styles/Docx'

export const Docx = ({ path, ErrorComponent, onError, style }) => {
    const container = useDocxData(path)

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <DocxStyles>
                <div
                    className='document-container'
                    ref={container}
                    style={style}
                >
                    <Loader
                        ErrorComponent={ErrorComponent}
                        onError={onError}
                    />
                </div>
            </DocxStyles>
        </ErrorBoundary>
    )
}
