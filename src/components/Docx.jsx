import React from 'react'
import { Loader } from './Loader'
import { useDocxData } from '../hooks'
import styles from '../styles/docx.module.scss'

export const Docx = ({ path }) => {
    const container = useDocxData(path)

    return (
        <div
            className={styles['document-container']}
            ref={container}
        >
            <Loader/>
        </div>
    )
}
