import axios from 'axios'

export const getDataForSheet = async (url, responseType) => {
    const config = { method: 'get', url, responseType }

    try {
        const res = await axios.request(config)
        return res.data
    } catch (error) {
        throw error
    }
}
