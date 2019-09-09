import React from 'react'
import { Loader } from './Loader'
import { usePhotoWrapper } from '../hooks'

export const PhotoWrapper = props => {
    const { state, Image } = usePhotoWrapper(props)
    const { width, height, style } = props
    const { originalWidth, originalHeight, imageLoaded, texture } = state

    if (!imageLoaded) { return <Loader/> }

    return (
        <Image
            texture={texture}
            originalHeight={originalHeight}
            originalWidth={originalWidth}
            width={width}
            height={height}
            style={style}
        />
    )
}
