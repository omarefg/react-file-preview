import { useState, useEffect } from 'react'
import { getSpreadSheetData, parseToCsv } from '../utils'

export const useCsvData = props => {
    const [state, setState] = useState({ rows: [], columns: [], isLoading: true })
    const { path, responseType, data } = props

    useEffect(() => {
        const createSheet = async () => {
            const sheetData = data || await getSpreadSheetData(path, responseType)
            setState(parseToCsv(sheetData))
        }
        createSheet()
    }, [path, responseType, data])

    return state
}

