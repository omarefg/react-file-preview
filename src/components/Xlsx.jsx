import React, { useState, useEffect } from 'react'
import { Csv } from './Csv'
import { Loader } from './Loader'
import { parseToXlsx, getSpreadSheetData } from '../utils'

export const Xlsx = props => {
    const [state, setState] = useState({ sheets: [], names: [], curSheetIndex: 0, isLoading: true })
    const { sheets, names, curSheetIndex, isLoading } = state
    const { path, responseType, height, onGridSort } = props

    useEffect(() => {
        const createSheet = async () => {
            const data = await getSpreadSheetData(path, responseType)
            setState(parseToXlsx(data))
        }
        createSheet()
    }, [path, responseType])

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
                path={path}
                height={height}
                onGridSort={onGridSort}
                data={sheet}
                responseType={responseType}
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
