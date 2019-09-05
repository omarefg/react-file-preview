import React from 'react'
import { FileViewer } from './components'

import solarImage from './samples/02-USVI-Solar.jpg'
import docx from './samples/SampleSpec.docx'
// import doc from './samples/sample.doc'
import csv from './samples/Total_Crime.csv'
import mp4 from './samples/small.mp4'
import xlsx from './samples/SimpleSpreadsheet.xlsx'
// import photo360 from './samples/360photo.jpg'
// import avi from './samples/drop.avi'
// import webm from './samples/small.webm'
// import mov from './samples/step.mov'
import mp3 from './samples/sample.mp3'
import pdf from './samples/sample.pdf'

export const App = () => {
    return (
        <div>
            <h1>JPG</h1>
            <FileViewer fileType='jpg' filePath={solarImage}/>
            <h1>DOCX</h1>
            <FileViewer fileType='docx' filePath={docx}/>
            <h1>CSV</h1>
            <FileViewer
                fileType='csv'
                filePath={csv}
                onGridSort={() => null}
            />
            <h1>MP4</h1>
            <FileViewer fileType='mp4' filePath={mp4}/>
            <h1>XLSX</h1>
            <FileViewer fileType='xlsx' filePath={xlsx}/>
            <h1>MP3</h1>
            <FileViewer fileType='mp3' filePath={mp3}/>
            <h1>PDF</h1>
            <FileViewer fileType='pdf' filePath={pdf}/>
        </div>
    )
}
