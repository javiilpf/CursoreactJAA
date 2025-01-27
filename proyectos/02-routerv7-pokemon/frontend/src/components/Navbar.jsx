import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/paths";
const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <NavLink to={ROUTES.HOME} className="text-white text-2xl font-bold">Pokedex</NavLink>
            <ul className="flex gap-4">
                <li>
                <NavLink to={ROUTES.HOME} className="text-white ">Inicio</NavLink>
                </li>
                <li>
                <NavLink to={ROUTES.SEARCH} className="text-white">Buscar </NavLink>
                </li>
                <li>
                <NavLink to={ROUTES.FAVORITES} className="text-white">Favoritos</NavLink>
                </li>
                <li>
                <NavLink to={ROUTES.ABOUT} className="text-white">About</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar