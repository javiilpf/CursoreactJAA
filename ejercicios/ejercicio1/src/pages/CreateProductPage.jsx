
import { useContext } from 'react';
import { ProductContext } from "../context/ProductContext";

const CreateProductPage = () => {
    const { createProduct } = useContext(ProductContext);

    const handleSubmitCreate = async (event) => {
        event.preventDefault();
        const ProductObject = {
            nombre: event.target.nombre.value,
            descripcion: event.target.descripcion.value,
            precio: event.target.precio.value,
            stock: event.target.stock.value
        };
        createProduct(ProductObject);
    };

    return (
        <div>
            <div>
                <h1>Creación de un nuevo producto</h1>
            </div>
            <div>
                <form onSubmit={handleSubmitCreate} id="createProduct">
                    <div>
                        <label>Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required placeholder="Nombre del producto" />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input type="text" id="descripcion" name="descripcion" required placeholder="Descripción del producto" />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input type="number" id="precio" name="precio" required placeholder="Precio del producto" />
                    </div>
                    <div>
                        <label>Stock:</label>
                        <input type="number" id="stock" name="stock" required placeholder="Stock del producto" />
                    </div>
                    <div>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProductPage;
