import { use, useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            } 
        }
        fetchData();
    }, [url])

    return { loading, data, error };
}

export default useFetch;

