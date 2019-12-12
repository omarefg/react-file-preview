import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSearchPlus,
    faSearchMinus,
    faUndoAlt,
    faChevronLeft,
    faChevronRight,
    faPrint,
    faDownload,
} from '@fortawesome/free-solid-svg-icons'

import { PdfMenuStyles } from '../styles/PdfMenu'

export const PdfMenu = props => {
    const {
        increaseZoom,
        resetZoom,
        reduceZoom,
        reducePage,
        increasePage,
        print,
        page,
        onPrint,
        pdf,
        allowPrint,
        allowDownload,
        onDownload,
    } = props

    const printHandler = () => (onPrint ? onPrint(pdf) : print())

    return (
        <PdfMenuStyles>
            <div className='buttons-container'>
                <button
                    onClick={increaseZoom}
                    type='button'
                    className='button'
                    title='Zoom In'
                >
                    <FontAwesomeIcon icon={faSearchPlus}/>
                </button>
                <button
                    onClick={resetZoom}
                    type='button'
                    className='button'
                    title='Restart Zoom'
                >
                    <FontAwesomeIcon icon={faUndoAlt}/>
                </button>
                <button
                    onClick={reduceZoom}
                    type='button'
                    className='button'
                    title='Zoom Out'
                >
                    <FontAwesomeIcon icon={faSearchMinus}/>
                </button>
                <button
                    onClick={reducePage}
                    type='button'
                    className='button'
                    title='Previous Page'
                >
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <input
                    className='input'
                    type='number'
                    value={page}
                    disabled
                />
                <button
                    onClick={increasePage}
                    type='button'
                    className='button'
                    title='Next Page'
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
                {allowPrint && (
                    <button
                        onClick={printHandler}
                        type='button'
                        className='button'
                        title='Print'
                    >
                        <FontAwesomeIcon icon={faPrint}/>
                    </button>
                )}
                {allowDownload && (
                    <button
                        onClick={onDownload}
                        type='button'
                        className='button'
                        title='Download'
                    >
                        <FontAwesomeIcon icon={faDownload}/>
                    </button>
                )}
            </div>
        </PdfMenuStyles>
    )
}
