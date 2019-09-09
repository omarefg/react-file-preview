import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { Photo } from '../components/Photo'
import { Photo360 } from '../components/Photo360'

export const usePhotoWrapper = props => {
    const [state, setState] = useState({
        originalWidth: 0,
        originalHeight: 0,
        imageLoaded: false,
        texture: null,
    })

    const { path, type } = props
    const { originalWidth, originalHeight } = state

    useEffect(() => {
        const onLoad = texture => setState(state => ({
            ...state,
            originalWidth: texture.image.width,
            originalHeight: texture.image.height,
            imageLoaded: true,
            texture,
        }))

        const onProgress = xhr => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`)

        const onError = xhr => console.log('An error happened', xhr)

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

    return { state, Image }
}
