import React from 'react'
import { usePhoto } from '../hooks/photo'

export const Photo = props => {
    const { containerStyles, container } = usePhoto(props)

    return (
        <div
            ref={container}
            style={containerStyles}
        />
    )
}
