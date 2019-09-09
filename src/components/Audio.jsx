import React, { useState } from 'react'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'

import styles from '../styles/Audio.module.scss'

export const Audio = ({ path, ErrorComponent, onError, style }) => {
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
                    className={styles.audio}
                    style={{ ...style, visibility }}
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
