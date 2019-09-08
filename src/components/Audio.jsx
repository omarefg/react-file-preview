import React, { useState } from 'react'
import { Loader } from '.'

export const Audio = props => {
    const [loading, setLoader] = useState(true)
    const { filePath } = props
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
                    src={filePath}
                >
                    Video playback is not supported by your browser.
                </audio>
            </div>
        </div>
    )
}
