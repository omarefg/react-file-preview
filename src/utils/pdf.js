import { DEFAULT_SCALE } from './constants'

export const renderPage = ({ page, containerWidth, zoom, canvas }) => {
    const calculatedScale = (containerWidth / page.getViewport({ scale: DEFAULT_SCALE }).width)
    const scale = calculatedScale > DEFAULT_SCALE ? DEFAULT_SCALE : calculatedScale
    const viewport = page.getViewport({ scale: scale + zoom })
    const canvasContext = canvas.current && canvas.current.getContext('2d')
    page.render({ canvasContext, viewport })
    return { canvasContext, viewport }
}
