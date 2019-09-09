import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import styles from '../styles/Unsupported.module.scss'

export const Unssuported = props => {
    const { UnssuportedComponent, ErrorComponent, type, onError, style } = props

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div
                className={styles.unssuported}
                style={style}
            >
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
