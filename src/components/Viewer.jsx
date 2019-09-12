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
        reactTableProps,
        UnssuportedComponent,
        ErrorComponent,
        style,
        onError,
        pageSize,
        showPdfMenu,
        onPrint,
    } = props

    switch (type) {
    case 'csv': {
        return (
            <Csv
                path={path}
                height={height}
                reactTableProps={reactTableProps}
                ErrorComponent={ErrorComponent}
                onError={onError}
                pageSize={pageSize}
            />
        )
    }
    case 'xlsx': {
        return (
            <Xlsx
                path={path}
                height={height}
                reactTableProps={reactTableProps}
                responseType='arraybuffer'
                ErrorComponent={ErrorComponent}
                onError={onError}
                pageSize={pageSize}
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
                showPdfMenu={showPdfMenu}
                style={style}
                onPrint={onPrint}
            />
        )
    }
    case 'docx': {
        return (
            <Docx
                path={path}
                ErrorComponent={ErrorComponent}
                onError={onError}
                style={style}
            />
        )
    }
    case 'mp3': {
        return (
            <Audio
                path={path}
                ErrorComponent={ErrorComponent}
                onError={onError}
                style={style}
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
                style={style}
            />
        )
    }
    default: {
        return (
            <Unssuported
                UnssuportedComponent={UnssuportedComponent}
                ErrorComponent={ErrorComponent}
                onError={onError}
                style={style}
                type={type}
            />
        )
    }
    }
}

const { string, func, number, element, oneOfType, object, bool } = PropTypes

Viewer.propTypes = {
    type: string.isRequired,
    path: string.isRequired,
    onError: func,
    ErrorComponent: element,
    UnssuportedComponent: element,
    height: oneOfType([string, number]),
    width: oneOfType([string, number]),
    style: object,
    reactTableProps: object,
    showPdfMenu: bool,
    onPrint: func,
    className: string,
}

Viewer.defaultProps = {
    onError: () => null,
    ErrorComponent: null,
    UnsupportedComponent: null,
    reactTableProps: { },
    height: null,
    width: null,
    style: null,
    showPdfMenu: true,
    onPrint: null,
    className: null,
}
