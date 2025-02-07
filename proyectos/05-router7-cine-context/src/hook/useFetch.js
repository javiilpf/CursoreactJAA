import { useEffect } from "react";
import { useState } from "react";

// hook que se encargue de realizar cuaquier petición a una api
export const useFetch=(fetchFunction, dependencies=[]) =>{
    // estado para guardar la data
    const [data, setData]=useState(null);
    // estado para guardar el loading
    const [loading, setLoading]=useState(false);
    // estado para guardar el error
    const [error, setError]=useState(null);


    const fetchData=async()=>{
        try{
            // funcion que hace la petición a la api
            const result = await fetchFunction()
            setData(result);
        }catch(error){
            setError(error);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        // Creo un objeto para abordar la peticion
        const abortController=new AbortController();
        setLoading(true);
        fetchData();

      return () => {
        abortController.abort();
      }
    }, dependencies);
    return {data, loading, error};
    
}