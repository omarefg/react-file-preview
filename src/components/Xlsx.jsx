import React, { useState, useEffect } from 'react'
import { Csv, Loader } from '.'
import { parseToXlsx, getDataForSheet } from '../utils'

export const Xlsx = props => {
    const [state, setState] = useState({ sheets: [], names: [], curSheetIndex: 0, isLoading: true })
    const { sheets, names, curSheetIndex, isLoading } = state
    const { filePath, responseType } = props

    useEffect(() => {
        const createSheet = async () => {
            const data = await getDataForSheet(filePath, responseType)
            setState(parseToXlsx(data))
        }
        createSheet()
    }, [filePath, responseType])

    const renderSheetNames = names => {
        const sheets = names.map((name, index) => (
            <input
                key={name}
                type='button'
                value={name}
                onClick={() => setState({ ...state, curSheetIndex: index })}
            />
        ))

        return (
            <div>
                {sheets}
            </div>
        )
    }

    const renderSheetData = sheet => {
        return (
            <Csv
                {...props}
                data={sheet}
            />
        )
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            {renderSheetNames(names)}
            {renderSheetData(sheets[curSheetIndex || 0])}
        </div>
    )
}
