import React from 'react'
import { Viewer } from './components'

import jpg from './samples/sample.jpeg'
import jpg360 from './samples/sample360.jpg'
import docx from './samples/sample.docx'
import pdf from './samples/sample.pdf'
import csv from './samples/sample.csv'
import xlsx from './samples/sample.xlsx'
import mp3 from './samples/sample.mp3'
import mp4 from './samples/sample.mp4'

export const App = () => {
    return (
        <div>
            <h1>JPG</h1>
            <Viewer
                type='jpg'
                path={jpg}
            />
            <h1>JPG 360</h1>
            <Viewer
                type='jpg'
                path={jpg360}
                width={500}
                height={500}
            />
            <h1>DOCX</h1>
            <Viewer
                type='docx'
                path={docx}
            />
            <h1>PDF</h1>
            <Viewer
                type='pdf'
                path={pdf}
            />
            <h1>CSV</h1>
            <Viewer
                type='csv'
                path={csv}
            />
            <h1>XLSX</h1>
            <Viewer
                type='xlsx'
                path={xlsx}
            />
            <h1>MP3</h1>
            <Viewer
                type='mp3'
                path={mp3}
            />
            <h1>MP4</h1>
            <Viewer
                type='mp4'
                path={mp4}
            />
        </div>
    )
}
