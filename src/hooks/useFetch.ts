import { useEffect, useState } from "react";

const useFetch = (url : string) => {
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ errorLog, setErrorLog ] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })  
    .then(res => { 
      if(!res.ok) {
        throw Error('Could not Fetch the Data!')
      }
      return res.json();
    }) 
    .then(data => { 
      setData(data) ; 
      setIsLoading(false) ; 
      setErrorLog(null) 
    })
    .catch(err => {
      if(err.name === 'AbortError') {
      } else {
        setIsLoading(false) ; 
        setErrorLog(err.message) ;
      }
    })

    return () => abortCont.abort();

  }, [url]);

  return {data, isLoading, errorLog}

};

export default useFetch;