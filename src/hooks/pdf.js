import { useState, useRef, useEffect } from 'react'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const usePdf = path => {
    const [state, setState] = useState({ pdf: null, zoom: 0, containerWidth: 0, page: 1, pages: null, url: '' })
    const { zoom, page, pages, url } = state
    const container = useRef(null)

    const setZoom = zoom => setState({ ...state, zoom })

    const setPage = page => setState({ ...state, page })

    const reduceZoom = () => zoom > 0 && setZoom(zoom - 1)

    const reducePage = () => page > 1 && setPage(page - 1)

    const increaseZoom = () => setZoom(zoom + 1)

    const increasePage = () => page < pages && setPage(page + 1)

    const resetZoom = () => setZoom(0)

    const print = () => {
        window.open(url, 'target')
    }

    useEffect(() => {
        const createPdf = async () => {
            const loadingTask = pdfjs.getDocument(path)
            const pdf = await loadingTask.promise.then()
            const containerWidth = container.current && container.current.offsetWidth
            const { url } = pdf._transport._params
            const pages = pdf.numPages
            setState(state => ({ ...state, pdf, containerWidth, pages, url }))
        }
        createPdf()
    }, [path])

    return {
        state,
        container,
        reduceZoom,
        increaseZoom,
        resetZoom,
        reducePage,
        increasePage,
        print,
    }
}
