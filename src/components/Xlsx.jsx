import React from 'react'
import { Csv } from './Csv'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'
import { useXlsxData } from '../hooks'

export const Xlsx = props => {
    const { state, setState } = useXlsxData(props)
    const { sheets, names, curSheetIndex, isLoading } = state
    const { height, onGridSort, ErrorComponent, onError } = props

    if (isLoading) {
        return (
            <Loader
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
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
        </ErrorBoundary>
    )
}
