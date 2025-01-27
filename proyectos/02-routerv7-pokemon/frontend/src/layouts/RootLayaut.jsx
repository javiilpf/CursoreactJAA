import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayaut = () => {
  return (
    <div>
         
        <Navbar />
        <Outlet />

    </div>
  )
}

export default RootLayaut