import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { Photo } from './Photo'
import { Photo360 } from './Photo360'
import { Loader } from './Loader'

export const PhotoWrapper = props => {
    const [state, setState] = useState({
        originalWidth: 0,
        originalHeight: 0,
        imageLoaded: false,
        texture: null,
    })

    const { path, type, width, height, style } = props
    const { originalWidth, originalHeight, imageLoaded, texture } = state

    const onLoad = texture => setState({
        ...state,
        originalWidth: texture.image.width,
        originalHeight: texture.image.height,
        imageLoaded: true,
        texture,
    })

    const onProgress = xhr => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)

    const onError = xhr => console.log('An error happened', xhr)

    useEffect(() => {
        const loader = new THREE.TextureLoader()
        loader.crossOrigin = ''
        loader.load(path, onLoad, onProgress, onError)
    }, [path])

    const getImageType = (width, height, type) => {
        if (type === 'jpg' && window.Math.abs((width / height) - 2) <= 0.01) {
            return Photo360
        }
        return Photo
    }

    const Image = getImageType(originalWidth, originalHeight, type)

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
