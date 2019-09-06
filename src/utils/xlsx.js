import XLSX from 'xlsx'

export const parseToXlsx = data => {
    const dataArr = new Uint8Array(data)
    const arr = []

    for (let i = 0; i !== dataArr.length; i += 1) {
        arr.push(String.fromCharCode(dataArr[i]))
    }

    const workbook = XLSX.read(arr.join(''), { type: 'binary' })
    const names = Object.keys(workbook.Sheets)
    const sheets = names.map(name => (
        XLSX.utils.sheet_to_csv(workbook.Sheets[name])
    ))

    return { sheets, names, curSheetIndex: 0 }
}
