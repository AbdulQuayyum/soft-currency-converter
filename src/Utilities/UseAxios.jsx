import axios from "axios"
import { useEffect, useState } from "react"

const UseAxios = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const FetchData = async () => {
            try {
                setLoaded(true)
                const response = await axios(url)
                setData(response.data)
            } catch (error) {
                setError(error)
                setLoaded(false)
                // } finally {
            }
        }
        FetchData()
    }, [url])

    return [data, error, loaded]
}

export default UseAxios