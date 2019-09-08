import React from 'react'
import { Viewer } from './components'

import jpg from './samples/sample.jpg'
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
            {/* <h1>JPG</h1>
            <Viewer
                fileType='jpg'
                filePath={jpg}
            />
            <h1>JPG 360</h1>
            <Viewer
                fileType='jpg'
                filePath={jpg360}
                width={500}
                height={500}
            /> */}
            <h1>DOCX</h1>
            <Viewer
                fileType='docx'
                filePath={docx}
            />
            {/* <h1>PDF</h1>
            <Viewer
                fileType='pdf'
                filePath={pdf}
            />
            <h1>CSV</h1>
            <Viewer
                fileType='csv'
                filePath={csv}
                onGridSort={() => null}
            />
            <h1>XLSX</h1>
            <Viewer
                fileType='xlsx'
                filePath={xlsx}
                onGridSort={() => null}
            />
            <h1>MP3</h1>
            <Viewer
                fileType='mp3'
                filePath={mp3}
            />
            <h1>MP4</h1>
            <Viewer
                fileType='mp4'
                filePath={mp4}
            /> */}
        </div>
    )
}
