
import { useProducts } from './ProductContext';

const ProductList = () => {
    const {products, Error, loading} = useProducts();
  return (
    <>
        {loading?(<p>Cargando...</p>
        ):
        Error?<p>Error al cargar los productos</p>:
        
            products.map((product)=>(
                <div key={product._id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                </div>
            ))
        }
        
    </>
  )
}

export default ProductList