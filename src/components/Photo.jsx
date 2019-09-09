import React, { useRef, useEffect } from 'react'

export const Photo = props => {
    const {
        texture,
        originalWidth,
        originalHeight,
        width,
        height,
        style,
    } = props

    const { image } = texture
    const container = useRef(null)

    const containerStyles = {
        ...style,
        width: width || `${originalWidth}px`,
        height: height || `${originalHeight}px`,
    }

    useEffect(() => {
        image.style.width = width || `${originalWidth}px`
        image.style.height = height || `${originalHeight}px`
        image.setAttribute('class', 'photo')
        container.current && container.current.appendChild(image)
    }, [width, originalWidth, height, originalHeight, image])

    return (
        <div
            ref={container}
            style={containerStyles}
        />
    )
}
