import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const NavBar = () => {
  const {isAuthenticated, login, checkAuth}=useAuth()
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to='/' className="text-gray-800 hover:text-sky-800 font-bold text-2xl">
          Inicio
          </Link>
          <Link to='/login' className="text-gray-800 hover:text-sky-800 font-bold text-2xl">
          Login
          </Link>
          <Link to='/register' className="text-gray-800 hover:text-sky-800 font-bold text-2xl">
          Register
          </Link>
          <Link to='/dashboard' className="text-gray-800 hover:text-sky-800 font-bold text-2xl">
          Dashboard
          </Link>
          

        </div>
      </div>
    </nav>
  )
}

export default NavBar