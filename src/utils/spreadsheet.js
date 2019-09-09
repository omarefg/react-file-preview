import CSV from 'comma-separated-values'
import XLSX from 'xlsx'
import axios from 'axios'

export const parseToCsv = (data, columnFields) => {
    const rows = []
    const columns = []

    new CSV(data).forEach(array => {
        if (columns.length < 1) {
            array.forEach((cell, idx) => {
                columns.push({
                    accessor: `key-${idx}`,
                    Header: cell,
                    ...columnFields,
                })
            })
        } else {
            const row = {}
            array.forEach((cell, idx) => {
                row[`key-${idx}`] = cell
            })
            rows.push(row)
        }
    })

    return { rows, columns }
}

export const parseToXlsx = data => {
    const dataArr = new Uint8Array(data)
    const arr = []

    for (let i = 0; i !== dataArr.length; i++) {
        arr.push(String.fromCharCode(dataArr[i]))
    }

    const workbook = XLSX.read(arr.join(''), { type: 'binary' })
    const names = Object.keys(workbook.Sheets)
    const sheets = names.map(name => XLSX.utils.sheet_to_csv(workbook.Sheets[name]))

    return { sheets, names, curSheetIndex: 0 }
}

export const getSpreadSheetData = async (url, responseType) => {
    const config = { method: 'get', url, responseType }
    try {
        const res = await axios.request(config)
        return res.data
    } catch (error) {
        throw error
    }
}
