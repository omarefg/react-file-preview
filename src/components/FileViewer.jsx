import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/main.scss'

import {
    WithFetching,
    CsvViewer,
    DocxViewer,
    VideoViewer,
    XlsxViewer,
    PDFViewer,
    UnsupportedViewer,
    PhotoViewerWrapper,
    AudioViewer
} from './'

export class FileViewer extends Component {
    state = {
        loading: true
    }

    componentDidMount () {
        const container = document.getElementById('pg-viewer')
        const height = container ? container.clientHeight : 0
        const width = container ? container.clientWidth : 0
        this.setState({ height, width })
    }

    getDriver () {
        switch (this.props.fileType) {
        case 'csv': {
            return WithFetching(CsvViewer, this.props)
        }
        case 'xlsx': {
            const newProps = Object.assign({}, this.props, { responseType: 'arraybuffer' })
            return WithFetching(XlsxViewer, newProps)
        }
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png': {
            return PhotoViewerWrapper
        }
        case 'pdf': {
            return PDFViewer
        }
        case 'docx': {
            return DocxViewer
        }
        case 'mp3': {
            return AudioViewer
        }
        case 'webm':
        case 'mp4': {
            return VideoViewer
        }
        default: {
            return UnsupportedViewer
        }
        }
    }

    render () {
        const Driver = this.getDriver(this.props)
        return (
            <div className="pg-viewer-wrapper">
                <div className="pg-viewer" id="pg-viewer">
                    <Driver {...this.props} width={this.state.width} height={this.state.height} />
                </div>
            </div>
        )
    }
}

FileViewer.propTypes = {
    fileType: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired,
    onError: PropTypes.func,
    errorComponent: PropTypes.element,
    unsupportedComponent: PropTypes.element
}

FileViewer.defaultProps = {
    onError: () => null,
    errorComponent: null,
    unsupportedComponent: null
}
