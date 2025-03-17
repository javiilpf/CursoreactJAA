import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
export const ProductContext = createContext(null);

//Crea el provider
export const ProductProvider = ({children}) => {
    

    const [products, setproducts] = useState([]);
    const [Error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetchProducts();
    
    }, [])

    const fetchProducts = async () => {
        try{
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
            if(!response.ok){
                throw new Error("Error al obtener los productos")
            }
            const data = await response.json();
            setproducts(data);
            setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

    return (
        <ProductContext.Provider value={{products, Error}}>
            {children}
        </ProductContext.Provider>
    )
    // crea el hook del contexto y subirlo arriba
}
export const useProducts=()=>{
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useProduct debe estar dentro del proveedor ProductProvider")
    }
    return context;
}