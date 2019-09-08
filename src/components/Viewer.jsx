import React from 'react'
import PropTypes from 'prop-types'
import {
    PhotoWrapper,
    Pdf,
    Docx,
    Audio,
    Video,
    Unssuported,
    Csv,
    Xlsx
} from './'

export const Viewer = props => {
    switch (props.fileType) {
    case 'csv': {
        return (
            <Csv
                {...props}
            />
        )
    }
    case 'xlsx': {
        return (
            <Xlsx
                {...props}
                responseType='arraybuffer'
            />
        )
    }
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'png': {
        return <PhotoWrapper {...props}/>
    }
    case 'pdf': {
        return <Pdf {...props}/>
    }
    case 'docx': {
        return <Docx {...props}/>
    }
    case 'mp3': {
        return <Audio {...props}/>
    }
    case 'webm':
    case 'mp4': {
        return <Video {...props}/>
    }
    default: {
        return <Unssuported {...props}/>
    }
    }
}

Viewer.propTypes = {
    fileType: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired,
    onError: PropTypes.func,
    errorComponent: PropTypes.element,
    unsupportedComponent: PropTypes.element
}

Viewer.defaultProps = {
    onError: () => null,
    errorComponent: null,
    unsupportedComponent: null
}
