import React, { useEffect, useRef } from 'react'
import { Loader } from '.'
import { parseToDocx } from '../utils'
import '../styles/docx.scss'

export const Docx = props => {
    const { filePath } = props
    const container = useRef(null)

    useEffect(() => {
        const createDocx = async () => {
            const html = await parseToDocx(filePath)
            container.current && (container.current.innerHTML = html)
        }
        createDocx()
    }, [filePath])

    return (
        <div ref={container}>
            <Loader />
        </div>)
}
