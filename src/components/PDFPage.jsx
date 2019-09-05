import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const DEFAULT_SCALE = 1.1

export class PDFPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
        if (this.props.disableVisibilityCheck) this.fetchAndRenderPage()
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.disableVisibilityCheck) {
            if (prevProps.zoom !== this.props.zoom) this.fetchAndRenderPage()
            return
        }

        // we want to render/re-render in two scenarias
        // user scrolls to the pdf
        // user zooms in
        if (prevState.isVisible === this.state.isVisible && prevProps.zoom === this.props.zoom) return
        if (this.state.isVisible) this.fetchAndRenderPage()
    }

    onChange (isVisible) {
        if (isVisible) this.setState({ isVisible })
    }

    fetchAndRenderPage () {
        const { pdf, index } = this.props
        pdf.getPage(index).then(this.renderPage.bind(this))
    }

    renderPage (page) {
        const { containerWidth, zoom } = this.props
        const calculatedScale = (containerWidth / page.getViewport(DEFAULT_SCALE).width)
        const scale = calculatedScale > DEFAULT_SCALE ? DEFAULT_SCALE : calculatedScale
        const viewport = page.getViewport(scale + zoom)
        const { width, height } = viewport

        const context = this.canvas.getContext('2d')
        this.canvas.width = width
        this.canvas.height = height

        page.render({
            canvasContext: context,
            viewport
        })
    }

    render () {
        return (
            <div className='pdf-canvas'>
                {this.props.disableVisibilityCheck ? <canvas ref={node => this.canvas = node} width='670' height='870' /> : (
                    <VisibilitySensor onChange={this.onChange} partialVisibility >
                        <canvas ref={node => this.canvas = node} width='670' height='870' />
                    </VisibilitySensor>
                )
                }
            </div>
        )
    }
}
