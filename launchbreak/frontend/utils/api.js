import axios from 'axios'

export async function getLaunches(url) {
    const { data } = await axios.get(url)
    return data
}
