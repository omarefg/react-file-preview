import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/main.scss'

import {
    FetchWrapper,
    Csv,
    Docx,
    Video,
    Xlsx,
    Pdf,
    Unssuported,
    PhotoWrapper,
    Audio
} from '.'

export class Viewer extends Component {
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
            return FetchWrapper(Csv, this.props)
        }
        case 'xlsx': {
            const newProps = Object.assign({}, this.props, { responseType: 'arraybuffer' })
            return FetchWrapper(Xlsx, newProps)
        }
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png': {
            return PhotoWrapper
        }
        case 'pdf': {
            return Pdf
        }
        case 'docx': {
            return Docx
        }
        case 'mp3': {
            return Audio
        }
        case 'webm':
        case 'mp4': {
            return Video
        }
        default: {
            return Unssuported
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
