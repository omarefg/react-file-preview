import React, { useRef, useEffect } from 'react'
import { renderPage } from '../utils'

export const PdfPage = props => {
    const canvas = useRef(null)
    const { containerWidth, zoom, pdf, index } = props

    useEffect(() => {
        const fetchAndRenderPage = async () => {
            const page = await pdf.getPage(index)
            const pageConfig = { page, containerWidth, zoom, canvas }
            renderPage(pageConfig)
        }
        fetchAndRenderPage()
    }, [zoom, index, pdf, containerWidth])

    return (
        <div className='pdf-canvas'>
            <canvas
                ref={canvas}
                width='670'
                height='870'
            />
        </div>
    )
}
