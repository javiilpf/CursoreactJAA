import { Navigate, Outlet } from "react-router-dom"
import isAuthenticated from "../helpers/isAuthenticated"


const RootLayout = () => {
  // Funcion para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    Navigate("/");
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <link to="/" className="font-bold text-xl hover:text-gray-800">
                Home
              </link>
              <link to="/profile" className="font-bold text-xl hover:text-gray-800">
                Profile
              </link>
              <link to="/dashboard" className="font-bold text-xl hover:text-gray-800">
                Dashboard
              </link>
              {/* Pongo boton de cerrar sesión si el usuario está autenticado 
              */}
              {isAuthenticated() ?(
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800">Cerrar sesión</button>
              ):null }
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto mt-8 px-4">
          <Outlet/>
        </main>
      </div>
      
    </>
  )
}

export default RootLayout