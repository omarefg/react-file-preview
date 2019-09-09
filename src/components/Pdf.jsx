import React from 'react'
import { usePdf } from '../hooks'
import { PdfPage } from './PdfPage'
import { Loader } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'
import { PdfMenu } from './PdfMenu'
import { INCREASE_PERCENTAGE } from '../utils'

export const Pdf = ({ path, ErrorComponent, onError, showPdfMenu, style }) => {
    const {
        state,
        container,
        reduceZoom,
        increaseZoom,
        resetZoom,
        reducePage,
        increasePage,
        print,
    } = usePdf(path)
    const { pdf, zoom, containerWidth, page } = state

    return (
        <ErrorBoundary
            ErrorComponent={ErrorComponent}
            onError={onError}
        >
            <div>
                <div
                    ref={container}
                    style={style}
                >
                    {showPdfMenu && (
                        <PdfMenu
                            reduceZoom={reduceZoom}
                            increaseZoom={increaseZoom}
                            resetZoom={resetZoom}
                            reducePage={reducePage}
                            increasePage={increasePage}
                            print={print}
                            page={page}
                        />
                    )}
                    {!pdf && (
                        <Loader
                            ErrorComponent={ErrorComponent}
                            onError={onError}
                        />
                    )}
                    {pdf && (
                        <PdfPage
                            index={page}
                            pdf={pdf}
                            containerWidth={containerWidth}
                            zoom={zoom * INCREASE_PERCENTAGE}
                            ErrorComponent={ErrorComponent}
                            onError={onError}
                        />

                    )}
                </div>
            </div>
        </ErrorBoundary>
    )
}
