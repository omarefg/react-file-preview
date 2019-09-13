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

import styles from '../styles/PdfMenu.module.scss'

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
        <div className={styles['buttons-container']}>
            <button
                onClick={increaseZoom}
                type='button'
                className={styles.button}
                title='Zoom In'
            >
                <FontAwesomeIcon icon={faSearchPlus}/>
            </button>
            <button
                onClick={resetZoom}
                type='button'
                className={styles.button}
                title='Restart Zoom'
            >
                <FontAwesomeIcon icon={faUndoAlt}/>
            </button>
            <button
                onClick={reduceZoom}
                type='button'
                className={styles.button}
                title='Zoom Out'
            >
                <FontAwesomeIcon icon={faSearchMinus}/>
            </button>
            <button
                onClick={reducePage}
                type='button'
                className={styles.button}
                title='Previous Page'
            >
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <input
                className={styles.input}
                type='number'
                value={page}
                disabled
            />
            <button
                onClick={increasePage}
                type='button'
                className={styles.button}
                title='Next Page'
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
            {allowPrint && (
                <button
                    onClick={printHandler}
                    type='button'
                    className={styles.button}
                    title='Print'
                >
                    <FontAwesomeIcon icon={faPrint}/>
                </button>
            )}
            {allowDownload && (
                <button
                    onClick={onDownload}
                    type='button'
                    className={styles.button}
                    title='Download'
                >
                    <FontAwesomeIcon icon={faDownload}/>
                </button>
            )}
        </div>
    )
}
