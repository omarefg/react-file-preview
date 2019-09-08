import React, { useState, useEffect } from 'react'
import ReactDataGrid from 'react-data-grid'
import { parseToCsv, getDataForSheet } from '../utils'
import { Loader } from '../components'

export const Csv = props => {
    const [state, setState] = useState({ rows: [], columns: [], isLoading: true })
    const { filePath, responseType, height, onGridSort, data } = props
    const { rows, columns } = state

    useEffect(() => {
        const createSheet = async () => {
            const sheetData = data || await getDataForSheet(filePath, responseType)
            setState(parseToCsv(sheetData))
        }
        createSheet()
    }, [filePath, responseType, data])

    if (state.isLoading) {
        return (
            <Loader/>
        )
    }

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
