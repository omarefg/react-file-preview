import React, { Component } from 'react'
import { Loading } from './'
import '../styles/video.scss'

export class AudioViewer extends Component {
    state = {
        loading: true
    }

    onCanPlay = () => this.setState({ loading: false })

    renderLoading = () => {
        const { loading } = this.state

        if (loading) {
            return <Loading />
        }

        return null
    }

    render () {
        const { loading } = this.state
        const { filePath } = this.props
        const visibility = loading ? 'hidden' : 'visible'

        return (
            <div className='pg-driver-view'>
                <div className='video-container'>
                    {this.renderLoading()}
                    <audio
                        style={{ visibility }}
                        controls
                        onCanPlay={this.onCanPlay}
                        src={filePath}
                    >
                        Video playback is not supported by your browser.
                    </audio>
                </div>
            </div>
        )
    }
}
