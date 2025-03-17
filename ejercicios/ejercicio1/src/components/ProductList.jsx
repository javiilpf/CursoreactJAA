import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
const env =import.meta.env.VITE_API_URL;

const ProductList = () => {
  const { products, error, loading } = useProducts();
  useEffect(() => {
    fetch();
  }, [])

  const fetch=async ()=>{
    try{
      const response= await fetch(`${env}/api/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // para que las cookies se guarden servidor
  
      });
      if(!response.ok){
        return console.error("Error en el fetch a la api")
      }
      const data=response.json();
      
      return data;
    }catch(e){
      return console.error("Error en el fetch a la api", e)
    }
  }
  
  return (
    <>
      <h1>Lista de productos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} -- {product.price}
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default ProductList;
