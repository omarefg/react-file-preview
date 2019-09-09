import React from 'react'
import '../styles/unsupported.scss'

export const Unssuported = props => {
    const { UnssuportedComponent, type } = props

    return (
        <div>
            <div>
                {UnssuportedComponent ?
                    <UnssuportedComponent/> :
                    (
                        <p>
                            <b>{`.${type} `}</b>
                            is not supported.
                        </p>
                    )}
            </div>
        </div>
    )
}
