import React, { useRef, useEffect } from 'react'
import { getImageDimensions } from '../utils'
import '../styles/photo-viewer.scss'

export const Photo = props => {
    const { texture, originalWidth, originalHeight, width, height } = props
    const container = useRef(null)
    const containerStyles = { width: `${width}px`, height: `${height}px` }

    useEffect(() => {
        const imageDimensionsConfig = { width, originalWidth, height, originalHeight }
        const imageDimensions = getImageDimensions(imageDimensionsConfig)

        texture.image.style.width = `${imageDimensions.width}px`
        texture.image.style.height = `${imageDimensions.height}px`
        texture.image.setAttribute('class', 'photo')

        container.current && container.current.appendChild(texture.image)
    }, [width, originalWidth, height, originalHeight, texture.image])

    return (
        <div
            className='photo-viewer-container'
            ref={container}
            style={containerStyles}
        />
    )
}
