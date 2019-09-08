import React, { useRef, useEffect } from 'react'

export const Photo = props => {
    const { texture, originalWidth, originalHeight, width, height } = props
    const container = useRef(null)
    const containerStyles = {
        width: `${width || originalWidth}px`,
        height: `${height || originalHeight}px`
    }

    useEffect(() => {
        texture.image.style.width = `${width || originalWidth}px`
        texture.image.style.height = `${height || originalHeight}px`
        texture.image.setAttribute('class', 'photo')

        container.current && container.current.appendChild(texture.image)
    }, [width, originalWidth, height, originalHeight, texture.image])

    return (
        <div
            ref={container}
            style={containerStyles}
        />
    )
}
