import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {isAuthenticated && !isAuthPage && <Navbar />}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout; 