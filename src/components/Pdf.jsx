import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { usePdf } from '../hooks'
import { PdfPage } from './PdfPage'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'
import { INCREASE_PERCENTAGE } from '../utils'

export const Pdf = ({ path, ErrorComponent, onError }) => {
    const { state, container, reduceZoom, increaseZoom, resetZoom } = usePdf(path)
    const { pdf, zoom, containerWidth, pages } = state

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                <div ref={container} >
                    <div>
                        <button
                            onClick={increaseZoom}
                            type='button'
                        >
                            <FontAwesomeIcon icon={faSearchPlus}/>
                        </button>
                        <button
                            onClick={resetZoom}
                            type='button'
                        >
                            <FontAwesomeIcon icon={faUndoAlt}/>
                        </button>
                        <button
                            onClick={reduceZoom}
                            type='button'
                        >
                            <FontAwesomeIcon icon={faSearchMinus}/>
                        </button>
                    </div>
                    {!pdf && (
                        <Loader
                            ErrorComponent={ErrorComponent}
                            onError={onError}
                        />
                    )}
                    {pdf && pages.map(v => {
                        return (
                            <PdfPage
                                index={v + 1}
                                pdf={pdf}
                                containerWidth={containerWidth}
                                zoom={zoom * INCREASE_PERCENTAGE}
                                key={v}
                                ErrorComponent={ErrorComponent}
                                onError={onError}
                            />
                        )
                    })}
                </div>
            </div>
        </ErrorBoundary>
    )
}
