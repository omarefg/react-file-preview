import React from 'react'
import { usePhoto360 } from '../hooks/photo360'

export const Photo360 = props => {
    const { style } = props
    const { onMouseMove, onMouseUp, onMouseDown, container } = usePhoto360(props)

    return (
        <div
            id='photo360'
            ref={container}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            role='main'
            style={style}
        />
    )
}
