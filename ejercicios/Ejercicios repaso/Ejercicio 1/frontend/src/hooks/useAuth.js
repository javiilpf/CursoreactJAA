
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useAuth=()=>{
    const context=useContext(AuthContext);
    const {login, token, user, isAuthenticated}=context;
    const navigate=useNavigate();
    
    const loginUser=async(userData)=>{
        try{

            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if(!response.ok){
                throw new Error('Error al iniciar sesión');
            }
            const data = await response.json();
            login(data.user, data.token);
            navigate('/home')
        }catch(error){
            console.error('Error al iniciar sesión:', error);
            throw error;
        }
    }

    const registerUser=async(userData)=>{
        try{
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if(!response.ok){
                throw new Error('Error al registrar usuario');
            }
            const data = await response.json();
            login(data.user, data.token);
            navigate('/login')
        }catch(error){
            console.error('Error al registrar usuario:', error);
            throw error;
        }
    }

    
 return {loginUser, registerUser, login, token, user, isAuthenticated};
    
    
}

export default useAuth;