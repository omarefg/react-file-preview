import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { parseToCsv } from '../utils'

export const Csv = props => {
    const { rows, columns } = parseToCsv(props.data)

    return (
        <ReactDataGrid
            columns={columns}
            rowsCount={rows.length}
            rowGetter={i => rows[i]}
            minHeight={props.height || 650}
            onGridSort={props.onGridSort}
        />
    )
}
