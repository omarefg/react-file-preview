import React from 'react'
import { Csv } from './Csv'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'
import { useXlsxData } from '../hooks'

import styles from '../styles/Xlsx.module.scss'

export const Xlsx = props => {
    const { state, setState } = useXlsxData(props)
    const { sheets, names, curSheetIndex, isLoading } = state
    const { reactTableProps, ErrorComponent, onError } = props

    if (isLoading) {
        return (
            <Loader
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                <div className={styles.names}>
                    {names.map((name, curSheetIndex) => {
                        return (
                            <input
                                className={styles.name}
                                key={name}
                                type='button'
                                value={name}
                                onClick={() => setState({ ...state, curSheetIndex })}
                            />
                        )
                    })}
                </div>
                <Csv
                    reactTableProps={reactTableProps}
                    data={sheets[curSheetIndex || 0]}
                />
            </div>
        </ErrorBoundary>
    )
}
