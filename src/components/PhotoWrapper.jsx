import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { Photo, Photo360, Loader } from '.'

export const PhotoWrapper = props => {
    const [state, setState] = useState({
        originalWidth: 0,
        originalHeight: 0,
        imageLoaded: false
    })
    const { filePath, fileType } = props
    const { originalWidth, originalHeight } = state

    const onLoad = texture => setState({
        originalWidth: texture.image.width,
        originalHeight: texture.image.height,
        imageLoaded: true,
        texture
    })

    const onProgress = xhr => console.log(`${xhr.loaded / xhr.total * 100}% loaded`)

    const onError = xhr => console.log('An error happened', xhr)

    useEffect(() => {
        const loader = new THREE.TextureLoader()
        loader.crossOrigin = ''
        loader.load(filePath, onLoad, onProgress, onError)
    }, [filePath])

    const getPhotoDriver = (width, height, fileType) => {
        if (fileType === 'jpg' && window.Math.abs((width / height) - 2) <= 0.01) {
            return Photo360
        }
        return Photo
    }

    const PhotoDriver = getPhotoDriver(originalWidth, originalHeight, fileType)

    if (!state.imageLoaded) {
        return <Loader />
    }

    return (
        <PhotoDriver {...state} {...props} />
    )
}
