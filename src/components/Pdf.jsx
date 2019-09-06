import React, { useState, useRef, useEffect } from 'react'
import { pdfjs } from 'react-pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { PdfPage, Loader } from '.'
import { INCREASE_PERCENTAGE } from '../utils'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const Pdf = props => {
    const { filePath } = props
    const container = useRef(null)
    const [state, setState] = useState({ pdf: null, zoom: 0, containerWidth: 0 })
    const setZoom = zoom => setState({ ...state, zoom })

    useEffect(() => {
        const createPdf = async () => {
            const loadingTask = pdfjs.getDocument(filePath)
            const pdf = await loadingTask.promise.then()
            const containerWidth = container.current && container.current.offsetWidth
            setState(state => ({ ...state, pdf, containerWidth }))
        }
        createPdf()
    }, [filePath])

    const reduceZoom = () => state.zoom > 0 && setZoom(state.zoom - 1)

    const increaseZoom = () => setZoom(state.zoom + 1)

    const resetZoom = () => setZoom(0)

    const renderPages = () => {
        const { pdf, containerWidth, zoom } = state
        if (!pdf) { return null }
        const pages = Array.apply(null, { length: pdf.numPages })

        return pages.map((_v, i) => {
            return (
                <PdfPage
                    index={i + 1}
                    pdf={pdf}
                    containerWidth={containerWidth}
                    zoom={zoom * INCREASE_PERCENTAGE}
                    key={i}
                />
            )
        })
    }

    return (
        <div className='pdf-viewer-container'>
            <div className='pdf-viewer' ref={container} >
                <div className='pdf-controlls-container'>
                    <div className='view-control' onClick={increaseZoom} >
                        <FontAwesomeIcon icon={faSearchPlus}/>
                    </div>
                    <div className='view-control' onClick={resetZoom}>
                        <FontAwesomeIcon icon={faUndoAlt}/>
                    </div>
                    <div className='view-control' onClick={reduceZoom}>
                        <FontAwesomeIcon icon={faSearchMinus}/>
                    </div>
                </div>
                {!state.pdf && <Loader />}
                {renderPages()}
            </div>
        </div>
    )
}
