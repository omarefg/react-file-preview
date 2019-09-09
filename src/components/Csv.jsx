import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { useCsvData } from '../hooks'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'

export const Csv = props => {
    const state = useCsvData(props)
    const { height, onGridSort, ErrorComponent, onError } = props
    const { rows, columns, isLoading } = state

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
            <ReactDataGrid
                columns={columns}
                rowsCount={rows.length}
                rowGetter={i => rows[i]}
                minHeight={height || 650}
                onGridSort={onGridSort}
            />
        </ErrorBoundary>
    )
}
