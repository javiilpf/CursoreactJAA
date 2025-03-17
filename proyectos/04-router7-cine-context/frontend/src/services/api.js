const API_URL = 'http://localhost:3000/api';

// Función auxiliar para manejar las peticiones
export const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  console.log('Realizando petición a:', url);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include'
  });

  const data = await response.json();
  console.log('Respuesta del servidor:', data);

  if (!response.ok) {
    throw new Error(data.mensaje || data.message || 'Error en la petición');
  }

  return data;
};

// Servicios para películas
export const getPopularMoviesFromDB = async (page = 1) => {
  return fetchAPI(`/movies/popular?page=${page}`);
};

export const getMovieDetailsFromDB = async (id) => {
  return fetchAPI(`/movies/${id}`);
};

export const syncMovies = async () => {
  return fetchAPI('/movies/sync', {
    method: 'POST'
  });
};

export const getAllMovies = async (page = 1) => {
  return fetchAPI(`/movies?page=${page}`);
};

// Servicios de autenticación
export const login = async (credentials) => {
  console.log('Intentando login con:', credentials);
  return fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
};

export const verifyAuth = async () => {
  try {
    return await fetchAPI('/auth/verify');
  } catch (error) {
    if (error.message === 'No hay token de autenticación') {
      return { authenticated: false };
    }
    throw error;
  }
};

export const register = async (userData) => {
  const { confirmPassword, ...dataToSend } = userData;
  console.log('Datos a enviar:', dataToSend);
  
  return fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(dataToSend),
  });
};

export const logout = async () => {
  try {
    const response = await fetchAPI('/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    
    if (!response.ok) {
      // Si el servidor no responde, simplemente limpiamos el estado local
      localStorage.removeItem('token');
      return { success: true };
    }
    
    return response.json();
  } catch (error) {
    console.error('Error en logout:', error);
    // En caso de error, también limpiamos el estado local
    localStorage.removeItem('token');
    return { success: true };
  }
};

// Funciones específicas para reseñas
export const getMovieReviews = async (movieId) => {
  return fetchAPI(`/reviews/${movieId}`);
};

export const createReview = async (reviewData) => {
  return fetchAPI('/reviews', {
    method: 'POST',
    body: JSON.stringify(reviewData)
  });
};

export const getAllReviews = async () => {
  return fetchAPI('/reviews/all');
}; 