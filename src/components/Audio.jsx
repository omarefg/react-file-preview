import React, { useState } from 'react'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'

export const Audio = ({ path, ErrorComponent, onError }) => {
    const [loading, setLoader] = useState(true)
    const visibility = loading ? 'hidden' : 'visible'
    const onCanPlay = () => setLoader(false)

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                {loading && (
                    <Loader
                        ErrorComponent={ErrorComponent}
                        onError={onError}
                    />
                )}
                <audio
                    style={{ visibility }}
                    controls
                    onCanPlay={onCanPlay}
                    src={path}
                >
                        Video playback is not supported by your browser.
                </audio>
            </div>
        </ErrorBoundary>
    )
}
