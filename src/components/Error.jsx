import React from 'react'
import styles from '../styles/Error.module.scss'

export const Error = ({ ErrorComponent }) => {
    return (
        <div className={styles.container}>
            {ErrorComponent ?
                <ErrorComponent/> :
                <p className={styles.alert}>Unable to preview file</p>}
        </div>
    )
}
