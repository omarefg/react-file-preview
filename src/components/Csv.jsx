import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { useCsvData } from '../hooks'
import { Loader } from './Loader'

export const Csv = props => {
    const state = useCsvData(props)
    const { height, onGridSort } = props
    const { rows, columns, isLoading } = state

    if (isLoading) { return <Loader/> }

    return (
        <ReactDataGrid
            columns={columns}
            rowsCount={rows.length}
            rowGetter={i => rows[i]}
            minHeight={height || 650}
            onGridSort={onGridSort}
        />
    )
}
