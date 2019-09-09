import React, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'

export const Photo360 = props => {
    let savedX
    let savedY
    let savedLongitude
    let savedLatitude

    const [state, setState] = useState({
        manualControl: false,
        longitude: 0,
        latitude: 0,
        savedX,
        savedY,
        savedLongitude,
        savedLatitude,
    })

    const { texture, originalWidth, originalHeight, height, width, style } = props
    const container = useRef(null)

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(width || originalWidth, height || originalHeight)
        container.current && (container.current.innerHTML = '')
        container.current && container.current.appendChild(renderer.domElement)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
        camera.target = new THREE.Vector3(0, 0, 0)
        const sphere = new THREE.SphereGeometry(100, 100, 40)
        sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1))
        const sphereMaterial = new THREE.MeshBasicMaterial()
        sphereMaterial.map = texture
        const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)
        scene.add(sphereMesh)
        const latitude = Math.max(-85, Math.min(85, state.latitude))
        camera.target.x = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.cos(THREE.Math.degToRad(state.longitude))
        camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90 - latitude))
        camera.target.z = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.sin(THREE.Math.degToRad(state.longitude))
        camera.lookAt(camera.target)
        renderer.render(scene, camera)
    })

    const onMouseMove = event => {
        const { savedX, savedY, savedLongitude, savedLatitude } = state

        if (state.manualControl) {
            const newLongitude = (savedX - event.clientX) * 0.1 + savedLongitude
            const newLatitude = (event.clientY - savedY) * 0.1 + savedLatitude
            setState({
                ...state,
                longitude: newLongitude,
                latitude: newLatitude,
            })
        }
    }

    const onMouseUp = () => setState({ ...state, manualControl: false })

    const onMouseDown = event => {
        event.preventDefault()
        setState({
            ...state,
            savedLongitude: state.longitude,
            savedLatitude: state.latitude,
            savedX: event.clientX,
            savedY: event.clientY,
            manualControl: true,
        })
    }

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
