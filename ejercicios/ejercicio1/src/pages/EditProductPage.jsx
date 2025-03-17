import { useParams } from "react-router-dom";
import {fetchProductsById} from "../context/ProductContext"

const EditProductPage = () => {
    const {id}=useParams();
    const producto=fetchProductsById(id);
  return (

    <div>
        <div>
            <div>
                <h1>Edición del producto {producto.nombre}</h1>
            </div>
        </div>
    </div>
  )
}

export default EditProductPage