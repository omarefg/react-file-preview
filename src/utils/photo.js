export const getImageDimensions = ({ width, originalWidth, height, originalHeight }) => {
    let imgHeight
    let imgWidth
    if (originalHeight <= height && originalWidth <= width) {
        imgWidth = originalWidth
        imgHeight = originalHeight
    } else {
        const heightRatio = height / originalHeight
        const widthRatio = width / originalWidth
        if (heightRatio < widthRatio) {
            imgHeight = originalHeight * heightRatio
            imgWidth = originalWidth * heightRatio
        } else {
            imgHeight = originalHeight * widthRatio
            imgWidth = originalWidth * widthRatio
        }
    }

    return { height: imgHeight, width: imgWidth }
}
