import { useEffect, useState } from 'react';
import axios from "axios";

/**
 * A custom hook for fetching data from an API endpoint
 * @param {string} url - The URL to fetch data from
 * @returns {object} - The data and loading state
 */
export function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await axios(url);
            setData(res.data);
            setLoading(false);
        };
        
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;
