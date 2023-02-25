// in this component we build the useFetch custom hook, which helps us fetch
// the data from our local JSON server

import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // should I be using setTimeout()?
        setTimeout(() => {
             fetch(url, {signal: abortCont.signal}, {
                method: "GET"
            }) 
            .then(res => {
                console.log(res)
                //when res.json, get <DocType> error message
                return res
            })
            .then(data => {
                
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name==='AbortError') {
                    console.log('Fetch aborted');
                }
                else{
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 5000);
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
    }

export default useFetch;