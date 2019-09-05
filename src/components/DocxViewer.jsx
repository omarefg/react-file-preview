import React, { Component } from 'react'
import { Loading } from './'
import mammoth from 'mammoth'
import '../styles/docx.scss'

export class DocxViewer extends Component {
    componentDidMount () {
        const jsonFile = new XMLHttpRequest()
        jsonFile.open('GET', this.props.filePath, true)
        jsonFile.send()
        jsonFile.responseType = 'arraybuffer'
        jsonFile.onreadystatechange = () => {
            if (jsonFile.readyState === 4 && jsonFile.status === 200) {
                mammoth.convertToHtml(
                    { arrayBuffer: jsonFile.response },
                    { includeDefaultStyleMap: true }
                )
                    .then((result) => {
                        const docEl = document.createElement('div')
                        docEl.className = 'document-container'
                        docEl.innerHTML = result.value
                        document.getElementById('docx').innerHTML = docEl.outerHTML
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .done()
            }
        }
    }

    render () {
        return (
            <div id='docx'>
                <Loading />
            </div>)
    }
}
