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
        onError,
    } = props

    switch (type) {
    case 'csv': {
        return (
            <Csv
                path={path}
                height={height}
                onGridSort={onGridSort}
                ErrorComponent={ErrorComponent}
                onError={onError}
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
                ErrorComponent={ErrorComponent}
                onError={onError}
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
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    case 'pdf': {
        return (
            <Pdf
                path={path}
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    case 'docx': {
        return (
            <Docx
                path={path}
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    case 'mp3': {
        return (
            <Audio
                path={path}
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    case 'webm':
    case 'mp4': {
        return (
            <Video
                path={path}
                type={type}
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    default: {
        return (
            <Unssuported
                UnssuportedComponent={UnssuportedComponent}
                ErrorComponent={ErrorComponent}
                onError={onError}
            />
        )
    }
    }
}

const { string, func, number, element, oneOfType, object } = PropTypes

Viewer.propTypes = {
    type: string.isRequired,
    path: string.isRequired,
    onError: func,
    ErrorComponent: element,
    UnssuportedComponent: element,
    onGridSort: func,
    height: oneOfType([string, number]),
    width: oneOfType([string, number]),
    style: object,
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
