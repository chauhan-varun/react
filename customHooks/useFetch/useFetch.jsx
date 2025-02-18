import { useEffect, useState } from 'react'
import axios from "axios"

export function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await axios(url)
            setData(res.data)
        };
        setLoading(false)
        fetchData();

    }, [url]);

    return { data, loading };
}
