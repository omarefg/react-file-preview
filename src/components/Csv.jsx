import React from 'react'
import ReactTable from 'react-table'
import { useCsvData } from '../hooks'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'

import { CsvStyles } from '../styles/Csv'

export const Csv = props => {
    const state = useCsvData(props)
    const { reactTableProps, ErrorComponent, onError } = props
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
            <CsvStyles>
                <ReactTable
                    columns={columns}
                    data={rows}
                    defaultPageSize={10}
                    {...reactTableProps}
                />
            </CsvStyles>
        </ErrorBoundary>
    )
}
