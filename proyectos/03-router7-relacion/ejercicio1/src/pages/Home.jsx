import { useNavigate } from "react-router-dom"
import isAuthenticated from "../helpers/isAuthenticated";

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Crear una clave en el localStorage llamada token con el valor 123
        // y navegate a /dashboard
        localStorage.setItem("token", "123");
        navigate("/dashboard");
    }

    return (
        <div>
            {isAuthenticated() ? (
                <p>Ya estas autenticado</p>
            ) : (
                <div className="text-center">
                    <section>
                        <h1 className="text-center font-bold">Bienvenido a Ejercicio 1 de React Router Dom v7</h1>
                        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Login
                        </button>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Home