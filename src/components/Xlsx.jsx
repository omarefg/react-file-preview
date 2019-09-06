import React, { useState } from 'react'
import { Csv } from '.'
import { parseToXlsx } from '../utils'

export const Xlsx = props => {
    const [state, setState] = useState(parseToXlsx(props.data))
    const { sheets, names, curSheetIndex } = state

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
            <div className='sheet-names'>
                {sheets}
            </div>
        )
    }

    const renderSheetData = sheet => {
        const csvProps = Object.assign({}, props, { data: sheet })
        return (
            <Csv {...csvProps} />
        )
    }

    return (
        <div className='spreadsheet-viewer'>
            {renderSheetNames(names)}
            {renderSheetData(sheets[curSheetIndex || 0])}
        </div>
    )
}
