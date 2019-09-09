import { useState, useRef, useEffect } from 'react'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const usePdf = path => {
    const [state, setState] = useState({ pdf: null, zoom: 0, containerWidth: 0, pages: [] })
    const { zoom } = state
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
            const pages = [...Array(pdf.numPages).keys()]
            setState(state => ({ ...state, pdf, containerWidth, pages }))
        }
        createPdf()
    }, [path])

    return { state, container, reduceZoom, increaseZoom, resetZoom }
}
