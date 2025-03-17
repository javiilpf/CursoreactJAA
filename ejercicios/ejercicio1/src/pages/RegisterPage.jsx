import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../../proyectos/04-router7-cine-context/frontend/src/services/api";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Call your register function with name, email, and password
    await register(name, email, password);

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white">Registro</h2>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {loading ? 'Registrando...' : 'Registrar'}
          </button>

          <div className="text-center mt-4 text-gray-400">
            ¿No tienes cuenta? <Link to="/register" className="text-sky-400 hover:text-sky-500">Regístrate aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
