import { useState, useAuth } from "react";
import { Link } from "react-router-dom";


const LoginPage = () => {
    const [loading, setloading] = useState(false)
    const {login}=useAuth();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setloading(true);
        try{
            const formData = new FormData(e.target);
            const credentials={
                email: formData.get("email"),
                password: formData.get("password"),
            }
            console.log(credentials);
             login(credentials);
        }catch(error){
            console.log(error);
        }

    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">Iniciar Sesión</h2>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="text-gray-300">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-sky-600 text-white rounded hover:bg-sky-700 disabled:opacity-50"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>

          <div className="text-center mt-4 text-gray-400">
            ¿No tienes cuenta? <Link to="/register" className="text-sky-400 hover:text-sky-500">Regístrate aquí</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage