import React from 'react'
import { Loader } from './Loader'
import { useDocxData } from '../hooks'
import { ErrorBoundary } from './ErrorBoundary'
import styles from '../styles/docx.module.scss'

export const Docx = ({ path, ErrorComponent, onError }) => {
    const container = useDocxData(path)

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div
                className={styles['document-container']}
                ref={container}
            >
                <Loader
                    ErrorComponent={ErrorComponent}
                    onError={onError}
                />
            </div>
        </ErrorBoundary>
    )
}
