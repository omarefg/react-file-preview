import React, { useEffect, useRef } from 'react'
import { Loader } from './Loader'
import { parseToDocx } from '../utils'
import '../styles/docx.scss'

export const Docx = ({ path }) => {
    const container = useRef(null)

    useEffect(() => {
        const createDocx = async () => {
            const html = await parseToDocx(path)
            container.current && (container.current.innerHTML = html)
        }
        createDocx()
    }, [path])

    return (
        <div
            className='document-container'
            ref={container}
        >
            <Loader/>
        </div>
    )
}
