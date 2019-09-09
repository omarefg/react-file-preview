import { useEffect, useRef } from 'react'
import { parseToDocx } from '../utils'

export const useDocxData = path => {
    const container = useRef(null)

    useEffect(() => {
        const createDocx = async () => {
            const html = await parseToDocx(path)
            container.current && (container.current.innerHTML = html)
        }
        createDocx()
    }, [path, container])

    return container
}
