import React, { useState } from 'react'
import { Loader } from './Loader'

export const Video = ({ type, path }) => {
    const [isLoading, loadingHandler] = useState(true)
    const visibility = isLoading ? 'hidden' : 'visible'

    const onCanPlay = () => loadingHandler(false)

    return (
        <div>
            <div>
                {isLoading && <Loader/>}
                <video
                    style={{ visibility }}
                    controls
                    type={`video/${type}`}
                    onCanPlay={onCanPlay}
                    src={path}
                >
                    Video playback is not supported by your browser.
                </video>
            </div>
        </div>
    )
}
