import { useEffect, useState } from "react";


export const useFech = (url) => {

  const [state, setstate] = useState({
      name: null,
      isLoading: true,
      hasError: null,
  })

  const getFetch = async() =>{

    setstate({
      ...state,
      isLoading: true,
    })

    const resp = await fetch(url);
    const data = await resp.json();

    setstate({
      data : data,
      isLoading: false,
      hasError: null,
    })
    
  }

  useEffect(() => {
    getFetch();
    
  }, [url])
  
  

  return {
    data: state.data,
    isLoading:state.isLoading,
    hasError: state.hasError
  };
  
}
