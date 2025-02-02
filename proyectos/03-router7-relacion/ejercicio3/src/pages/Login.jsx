import { useAuth } from "../context/AuthContext";


const Login = () => {
    const {login}=useAuth();
    const handleLogin=()=>{
        Login();
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 shadow-lg w-100">
                Login Page

                </h1>
                <button  onClick={handleLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
                    Login
                </button>
        </div>
    </div>
  )
}

export default Login