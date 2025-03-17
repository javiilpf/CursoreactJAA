import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ToastProvider } from './context/ToastContext';
import { ReviewsProvider } from './context/ReviewsContext';
import Layout from './components/Layout';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <ReviewsProvider>
            <FavoritesProvider>
              <Layout>
                <Routes>
                  <Route path="/login" element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  } />
                  <Route path="/register" element={
                    <PublicRoute>
                      <Register />
                    </PublicRoute>
                  } />

                  <Route path="/" element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  } />
                  <Route path="/peliculas" element={
                    <ProtectedRoute>
                      <MovieList />
                    </ProtectedRoute>
                  } />
                  <Route path="/pelicula/:id" element={
                    <ProtectedRoute>
                      <MovieDetail />
                    </ProtectedRoute>
                  } />
                  <Route path="/buscar" element={
                    <ProtectedRoute>
                      <Search />
                    </ProtectedRoute>
                  } />
                  <Route path="/favoritos" element={
                    <ProtectedRoute>
                      <Favorites />
                    </ProtectedRoute>
                  } />
                  <Route path="/comentarios" element={
                    <ProtectedRoute>
                      <Reviews />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </FavoritesProvider>
          </ReviewsProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
};

export default App;
