import React from 'react'
import ReactDataGrid from 'react-data-grid'
import CSV from 'comma-separated-values'

const parse = data => {
    const rows = []
    const columns = []

    new CSV(data).forEach((array) => {
        if (columns.length < 1) {
            array.forEach((cell, idx) => {
                columns.push({
                    key: `key-${idx}`,
                    name: cell,
                    resizable: true,
                    sortable: true,
                    filterable: true
                })
            })
        } else {
            const row = {}
            array.forEach((cell, idx) => {
                row[`key-${idx}`] = cell
            })
            rows.push(row)
        }
    })

    return { rows, columns }
}

export const CsvViewer = props => {
    const { rows, columns } = parse(props.data)

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
