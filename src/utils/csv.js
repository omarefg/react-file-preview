import CSV from 'comma-separated-values'

export const parseToCsv = data => {
    const rows = []
    const columns = []

    new CSV(data).forEach((array) => {
        if (columns.length < 1) {
            array.forEach((cell, idx) => {
                columns.push({
                    key: `key-${idx}`,
                    name: cell,
                    resizable: true,
                    sortable: true,
                    filterable: true
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
