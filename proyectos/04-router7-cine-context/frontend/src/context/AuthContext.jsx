import { createContext, useContext, useState, useEffect } from 'react';
import { verifyAuth } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await verifyAuth();
        if (response.authenticated === false) {
          setIsAuthenticated(false);
          navigate('/login');
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error de verificación:', error);
        setIsAuthenticated(false);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated,
      loading,
      handleLogout
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
}; 