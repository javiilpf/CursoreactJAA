import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/path";
const NavBar = () => {
  return (
    <div>
        <nav >
            <div >
            <NavLink to={ROUTES.HOME}>Personas</NavLink>
            <ul >
                <li>
                <NavLink to={ROUTES.HOME}>Inicio</NavLink>
                </li>
                <li>
                <NavLink to={ROUTES.PERFIL} >Perfil </NavLink>
                </li>
                <li>
                <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar