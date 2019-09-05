import React from 'react'

import { pdfjs } from 'react-pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

import { PDFPage } from './'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
const INCREASE_PERCENTAGE = 0.2

export class PDFViewer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            pdf: null,
            zoom: 0,
            percent: 0
        }

        this.increaseZoom = this.increaseZoom.bind(this)
        this.reduceZoom = this.reduceZoom.bind(this)
        this.resetZoom = this.resetZoom.bind(this)
    }

    componentDidMount () {
        const { filePath } = this.props
        const containerWidth = this.container.offsetWidth
        pdfjs.getDocument(filePath, null, null, this.progressCallback.bind(this)).then((pdf) => {
            this.setState({ pdf, containerWidth })
        })
    }

    setZoom (zoom) {
        this.setState({
            zoom
        })
    }

    progressCallback (progress) {
        const percent = ((progress.loaded / progress.total) * 100).toFixed()
        this.setState({ percent })
    }

    reduceZoom () {
        if (this.state.zoom === 0) return
        this.setZoom(this.state.zoom - 1)
    }

    increaseZoom () {
        this.setZoom(this.state.zoom + 1)
    }

    resetZoom () {
        this.setZoom(0)
    }

    renderPages () {
        const { pdf, containerWidth, zoom } = this.state
        if (!pdf) return null
        const pages = Array.apply(null, { length: pdf.numPages })
        return pages.map((v, i) => (
            (<PDFPage
                index={i + 1}
                pdf={pdf}
                containerWidth={containerWidth}
                zoom={zoom * INCREASE_PERCENTAGE}
                disableVisibilityCheck={this.props.disableVisibilityCheck}
                key={i}
            />)
        ))
    }

    renderLoading () {
        if (this.state.pdf) return null
        return (<div className='pdf-loading'>LOADING ({this.state.percent}%)</div>)
    }

    render () {
        return (
            <div className='pdf-viewer-container'>
                <div className='pdf-viewer' ref={node => this.container = node} >
                    <div className='pdf-controlls-container'>
                        <div className='view-control' onClick={this.increaseZoom} >
                            <FontAwesomeIcon icon={faSearchPlus}/>
                        </div>
                        <div className='view-control' onClick={this.resetZoom}>
                            <FontAwesomeIcon icon={faUndoAlt}/>
                        </div>
                        <div className='view-control' onClick={this.reduceZoom}>
                            <FontAwesomeIcon icon={faSearchMinus}/>
                        </div>
                    </div>
                    {this.renderLoading()}
                    {this.renderPages()}
                </div>
            </div>
        )
    }
}

PDFViewer.defaultProps = {
    disableVisibilityCheck: false
}
