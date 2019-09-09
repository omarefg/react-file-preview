import React, { useState } from 'react'
import { Loader } from './Loader'

export const Audio = ({ path }) => {
    const [loading, setLoader] = useState(true)
    const visibility = loading ? 'hidden' : 'visible'
    const onCanPlay = () => setLoader(false)

    return (
        <div>
            <div>
                {loading && <Loader/>}
                <audio
                    style={{ visibility }}
                    controls
                    onCanPlay={onCanPlay}
                    src={path}
                >
                    Video playback is not supported by your browser.
                </audio>
            </div>
        </div>
    )
}
