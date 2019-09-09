import { useState, useEffect } from 'react'
import { parseToXlsx, getSpreadSheetData } from '../utils'

export const useXlsxData = props => {
    const [state, setState] = useState({ sheets: [], names: [], curSheetIndex: 0, isLoading: true })
    const { path, responseType } = props

    useEffect(() => {
        const createSheet = async () => {
            const data = await getSpreadSheetData(path, responseType)
            setState(parseToXlsx(data))
        }
        createSheet()
    }, [path, responseType])

    return { state, setState }
}
