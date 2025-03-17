import { useState } from "react"
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { loginUser } = useAuth();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="introduce tu email" 
          />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="introduce tu contraseña" 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login