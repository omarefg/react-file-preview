import React, { useState } from 'react'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'

export const Video = ({ type, path, ErrorComponent, onError }) => {
    const [isLoading, loadingHandler] = useState(true)
    const visibility = isLoading ? 'hidden' : 'visible'

    const onCanPlay = () => loadingHandler(false)

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                {isLoading && (
                    <Loader
                        ErrorComponent={ErrorComponent}
                        onError={onError}
                    />
                )}
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
        </ErrorBoundary>
    )
}
