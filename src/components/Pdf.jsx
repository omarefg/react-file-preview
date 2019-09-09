import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { usePdf } from '../hooks'
import { PdfPage } from './PdfPage'
import { Loader } from './Loader'
import { INCREASE_PERCENTAGE } from '../utils'

export const Pdf = ({ path }) => {
    const { state, container, reduceZoom, increaseZoom, resetZoom } = usePdf(path)
    const { pdf, zoom, containerWidth, pages } = state

    return (
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
                {!pdf && <Loader/>}
                {pdf && pages.map(v => {
                    return (
                        <PdfPage
                            index={v + 1}
                            pdf={pdf}
                            containerWidth={containerWidth}
                            zoom={zoom * INCREASE_PERCENTAGE}
                            key={v}
                        />
                    )
                })}
            </div>
        </div>
    )
}
