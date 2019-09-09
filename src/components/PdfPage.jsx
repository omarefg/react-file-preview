import React from 'react'
import { usePdfPage } from '../hooks'

export const PdfPage = props => {
    const { canvas } = usePdfPage(props)

    return (
        <div>
            <canvas
                ref={canvas}
            />
        </div>
    )
}
