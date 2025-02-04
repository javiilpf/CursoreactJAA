import { NavLink, Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    // Contenedor principal
    <div className="min-h-screen bg-gray-100">
        <nav className="bg-sky-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Sección izquierda del nav */}
                    <div className="flex items-center">
                        {/* Título */}
                        <NavLink to="/" className="text-lg font-bold">
                            Videoclub
                        </NavLink>
                        <div className="flex space-x-4 ml-10">
                            <NavLink to="/movies" className="hover:text-amber-600">
                            Películas
                            </NavLink>
                            <NavLink to="/search" className="hover:text-amber-600">
                            Buscar
                            </NavLink>
                            <NavLink to="/reviews" className="hover:text-amber-600">
                            Reseñas
                            </NavLink>
                            <NavLink to="/favorites" className="hover:text-amber-600">
                            Favoritos
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* Contenido principal donde colocar outlet*/}
        <main className="max-w-7xl mx-auto px-4 py-6">
            {/* Aquí va el componente que se renderizará en función de la ruta */}
            <Outlet/>

        </main>
        {/* Pie de página */}
        <footer className="bg-sky-950 text-white text-center p-4">
            <div className="max-w-7xl mx-auto px-4 py-6 mt-auto ">
                <p className="text-center">Videoclub ©2025</p>
            </div>
        </footer>
    </div>
  )
}

export default RootLayout