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
                type='jpg'
                path={jpg}
                width='100%'
                height='100%'
            /> */}
            <h1>JPG 360</h1>
            <Viewer
                type='jpg'
                path={jpg360}
                width='100%'
                height='500px'
                style={{
                    border: '2px solid red',
                }}
            />
            {/* <h1>DOCX</h1>
            <Viewer
                type='docx'
                path={docx}
            /> */}
            {/* <h1>PDF</h1>
            <Viewer
                type='pdf'
                path={pdf}
            /> */}
            {/* <h1>CSV</h1>
            <Viewer
                type='csv'
                path={csv}
                onGridSort={() => null}
            />  */}
            {/* <h1>XLSX</h1>
            <Viewer
                type='xlsx'
                path={xlsx}
                onGridSort={() => null}
            /> */}
            {/* <h1>MP3</h1>
            <Viewer
                type='mp3'
                path={mp3}
            /> */}
            {/* <h1>MP4</h1>
            <Viewer
                type='mp4'
                path={mp4}
            /> */}
        </div>
    )
}
