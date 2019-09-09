import React, { useState, useRef, useEffect } from 'react'
import { pdfjs } from 'react-pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { PdfPage } from './PdfPage'
import { Loader } from './Loader'
import { INCREASE_PERCENTAGE } from '../utils'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const Pdf = ({ path }) => {
    const [state, setState] = useState({ pdf: null, zoom: 0, containerWidth: 0 })
    const { pdf, zoom, containerWidth } = state
    const container = useRef(null)

    const setZoom = zoom => setState({ ...state, zoom })

    const reduceZoom = () => zoom > 0 && setZoom(zoom - 1)

    const increaseZoom = () => setZoom(zoom + 1)

    const resetZoom = () => setZoom(0)

    useEffect(() => {
        const createPdf = async () => {
            const loadingTask = pdfjs.getDocument(path)
            const pdf = await loadingTask.promise.then()
            const containerWidth = container.current && container.current.offsetWidth
            setState(state => ({ ...state, pdf, containerWidth }))
        }
        createPdf()
    }, [path])

    const renderPages = () => {
        if (!pdf) { return null }
        const pages = [...Array(pdf.numPages).keys()]

        return pages.map(v => {
            return (
                <PdfPage
                    index={v + 1}
                    pdf={pdf}
                    containerWidth={containerWidth}
                    zoom={zoom * INCREASE_PERCENTAGE}
                    key={v}
                />
            )
        })
    }

    return (
        <div>
            <div ref={container} >
                <div>
                    <button
                        onClick={increaseZoom}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faSearchPlus}/>
                    </button>
                    <button
                        onClick={resetZoom}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faUndoAlt}/>
                    </button>
                    <button
                        onClick={reduceZoom}
                        type='button'
                    >
                        <FontAwesomeIcon icon={faSearchMinus}/>
                    </button>
                </div>
                {!pdf && <Loader/>}
                {renderPages()}
            </div>
        </div>
    )
}
