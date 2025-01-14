import { useEffect, useState } from "react"

// Lista de productos renderizados
const ProductList = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart]= useState([])
    const fetchProducts=async () => {
        try{
            const response=await fetch("http://localhost:5173/src/data/db.json")
            if(!response.ok){
                throw new Error(`Error ${response.status}`)
            }
            setProducts(await response.json());
            const data=await response.json()
            setProducts(data)
            console.log(data)
        }catch(err){
            console.log("Error",err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <>
    <div>ProductList</div>
    </>
    
  )
}

export default ProductList