import React from 'react'
import PropTypes from 'prop-types'
import { PhotoWrapper } from './PhotoWrapper'
import { Pdf } from './Pdf'
import { Docx } from './Docx'
import { Audio } from './Audio'
import { Video } from './Video'
import { Unssuported } from './Unsupported'
import { Csv } from './Csv'
import { Xlsx } from './Xlsx'

export const Viewer = props => {
    const {
        type,
        path,
        height,
        width,
        onGridSort,
        UnssuportedComponent,
        ErrorComponent,
        style,
    } = props

    switch (type) {
    case 'csv': {
        return (
            <Csv
                path={path}
                height={height}
                onGridSort={onGridSort}
            />
        )
    }
    case 'xlsx': {
        return (
            <Xlsx
                path={path}
                height={height}
                onGridSort={onGridSort}
                responseType='arraybuffer'
            />
        )
    }
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
    case 'png': {
        return (
            <PhotoWrapper
                path={path}
                type={type}
                width={width}
                height={height}
                style={style}
            />
        )
    }
    case 'pdf': {
        return (
            <Pdf
                path={path}
            />
        )
    }
    case 'docx': {
        return (
            <Docx
                path={path}
            />
        )
    }
    case 'mp3': {
        return (
            <Audio
                path={path}
            />
        )
    }
    case 'webm':
    case 'mp4': {
        return (
            <Video
                path={path}
                type={type}
            />
        )
    }
    default: {
        if (ErrorComponent) {
            return (
                <ErrorComponent
                    ErrorComponent={ErrorComponent}
                />
            )
        }
        return (
            <Unssuported
                UnssuportedComponent={UnssuportedComponent}
            />
        )
    }
    }
}

Viewer.propTypes = {
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    onError: PropTypes.func,
    ErrorComponent: PropTypes.element,
    UnssuportedComponent: PropTypes.element,
    onGridSort: PropTypes.func,
    height: PropTypes.string,
    width: PropTypes.string,
    style: PropTypes.object,
}

Viewer.defaultProps = {
    onError: () => null,
    ErrorComponent: null,
    UnsupportedComponent: null,
    onGridSort: () => null,
    height: null,
    width: null,
    style: null,
}
