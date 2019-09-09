import mammoth from 'mammoth'
import axios from 'axios'

export const parseToDocx = async url => {
    const axiosConfig = { method: 'get', url, responseType: 'arraybuffer' }
    try {
        const file = await axios(axiosConfig)
        const docxFile = { arrayBuffer: file.data }
        const config = { includeDefaultStyleMap: true }
        const docx = await mammoth.convertToHtml(docxFile, config)
        return docx.value
    } catch (error) {
        throw error
    }
}
