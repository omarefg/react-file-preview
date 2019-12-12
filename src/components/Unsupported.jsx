import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { UnsupportedStyles } from '../styles/Unsupported'

export const Unssuported = props => {
    const { UnssuportedComponent, ErrorComponent, type, onError, style } = props

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <UnsupportedStyles>
                <div
                    className='unssuported'
                    style={style}
                >
                    {UnssuportedComponent ?
                        <UnssuportedComponent/> : (
                            <p>
                                <b>{`.${type} `}</b>
                            is not supported.
                            </p>
                        )}
                </div>
            </UnsupportedStyles>
        </ErrorBoundary>
    )
}
