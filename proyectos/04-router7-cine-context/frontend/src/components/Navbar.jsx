import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">VideoClub</Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-300">Inicio</Link>
            <Link to="/peliculas" className="hover:text-gray-300">Películas</Link>
            <Link to="/buscar" className="hover:text-gray-300">Buscar</Link>
            <Link to="/favoritos" className="hover:text-gray-300">Favoritos</Link>
            <Link to="/comentarios" className="hover:text-gray-300">Comentarios</Link>
            <button 
              onClick={handleLogout}
              className="hover:text-gray-300"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 