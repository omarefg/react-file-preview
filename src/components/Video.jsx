import React, { useState } from 'react'
import { Loader } from '.'
import '../styles/video.scss'

export const Video = props => {
    const [isLoading, loadingHandler] = useState(true)
    const { fileType, filePath } = props

    const onCanPlay = () => loadingHandler(false)

    const visibility = isLoading ? 'hidden' : 'visible'

    return (
        <div className='pg-driver-view'>
            <div className='video-container'>
                {isLoading && <Loader/>}
                <video
                    style={{ visibility }}
                    controls
                    type={`video/${fileType}`}
                    onCanPlay={onCanPlay}
                    src={filePath}
                >
                    Video playback is not supported by your browser.
                </video>
            </div>
        </div>
    )
}
