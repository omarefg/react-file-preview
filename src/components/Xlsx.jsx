import React from 'react'
import { Csv } from './Csv'
import { Loader } from './Loader'
import { useXlsxData } from '../hooks'

export const Xlsx = props => {
    const { state, setState } = useXlsxData(props)
    const { sheets, names, curSheetIndex, isLoading } = state
    const { height, onGridSort } = props

    if (isLoading) { return <Loader/> }

    return (
        <div>
            <div>
                {names.map((name, index) => {
                    return (
                        <input
                            key={name}
                            type='button'
                            value={name}
                            onClick={() => setState({ ...state, curSheetIndex: index })}
                        />
                    )
                })}
            </div>
            <Csv
                height={height}
                onGridSort={onGridSort}
                data={sheets[curSheetIndex || 0]}
            />
        </div>
    )
}
