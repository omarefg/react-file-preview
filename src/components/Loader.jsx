import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import styles from '../styles/Loader.module.scss'

export const Loader = ({ ErrorComponent, onError }) => {
    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div className={styles.container}>
                <span className={styles.loader}/>
            </div>
        </ErrorBoundary>
    )
}

