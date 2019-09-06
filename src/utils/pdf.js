import { DEFAULT_SCALE } from './'

export const renderPage = ({ page, containerWidth, zoom, canvas }) => {
    const calculatedScale = (containerWidth / page.getViewport({ scale: DEFAULT_SCALE }).width)
    const scale = calculatedScale > DEFAULT_SCALE ? DEFAULT_SCALE : calculatedScale
    const viewport = page.getViewport({ scale: scale + zoom })
    const { width, height } = viewport
    const canvasContext = canvas.current && canvas.current.getContext('2d')

    canvas.current && (canvas.current.width = width)
    canvas.current && (canvas.current.height = height)

    page.render({ canvasContext, viewport })
}
