import { FaCalendarAlt } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaCalendarAlt className="text-3xl text-white opacity-90" />
              <h1 className="text-2xl font-bold tracking-tight">
                Examen DWEC 2 Dual
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <NavLink to="/" className="text-lg font-bold">
                Inicio
              </NavLink>
              <NavLink to="/events/new" className="text-lg font-bold">
                Añadir Evento
              </NavLink>
              <button
              onClick={()=>navigate("/login")}
              >Iniciar sesion</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8"></main>
        <Outlet/>
      <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} - Javier AA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
