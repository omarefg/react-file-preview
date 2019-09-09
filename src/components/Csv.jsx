import React, { useState, useEffect } from 'react'
import ReactDataGrid from 'react-data-grid'
import { parseToCsv, getSpreadSheetData } from '../utils'
import { Loader } from './Loader'

export const Csv = props => {
    const [state, setState] = useState({ rows: [], columns: [], isLoading: true })
    const { path, responseType, height, onGridSort, data } = props
    const { rows, columns } = state

    useEffect(() => {
        const createSheet = async () => {
            const sheetData = data || await getSpreadSheetData(path, responseType)
            setState(parseToCsv(sheetData))
        }
        createSheet()
    }, [path, responseType, data])

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
