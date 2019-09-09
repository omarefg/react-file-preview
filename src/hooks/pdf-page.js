import { useRef, useEffect } from 'react'
import { renderPage } from '../utils'

export const usePdfPage = props => {
    const canvas = useRef(null)
    const { containerWidth, zoom, pdf, index } = props

    useEffect(() => {
        const fetchAndRenderPage = async () => {
            const page = await pdf.getPage(index)
            const pageConfig = { page, containerWidth, zoom, canvas }
            const { viewport } = renderPage(pageConfig)
            const { width, height } = viewport

            canvas.current && (canvas.current.width = width)
            canvas.current && (canvas.current.height = height)
        }
        fetchAndRenderPage()
    }, [zoom, index, pdf, containerWidth, canvas])

    return { containerWidth, zoom, pdf, index, canvas }
}
