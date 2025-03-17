# Videoclub - Proyecto Final

Este proyecto es una aplicación web de un videoclub que permite a los usuarios explorar películas, ver detalles, agregar reseñas y guardar favoritos.

## Tecnologías Utilizadas

- Frontend:
  - React + Vite
  - TailwindCSS
  - Context API
  - React Router

- Backend:
  - Node.js + Express
  - MongoDB
  - Mongoose

- Otros:
  - Docker
  - TMDB API

## Requisitos Previos

- Docker y Docker Compose instalados en tu sistema
- Una API key de TMDB (The Movie Database)

## Configuración del Proyecto

1. Clona el repositorio:

```bash
git clone git@github.com:javiilpf/proyecto_videoclub.git
cd proyecto_videoclub
```

2. Crea un archivo `.env` en la raíz del proyecto y agrega tu API key de TMDB:

```bash
VITE_TMDB_API_KEY=tu_api_key
```

3. Inicia el proyecto:

```bash
docker-compose up --build
```

## Acceso a la Aplicación

Una vez que los contenedores estén corriendo, puedes acceder a la aplicación a través de:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- MongoDB: mongodb://localhost:27017

## Estructura de URLs

- Página principal: http://localhost:5173
- Listado de películas: http://localhost:5173/peliculas
- Detalle de película: http://localhost:5173/pelicula/:id
- Favoritos: http://localhost:5173/favoritos
- Login: http://localhost:5173/login
- Registro: http://localhost:5173/register

## API Endpoints

- GET /api/movies - Obtener listado de películas
- GET /api/movies/:id - Obtener detalle de película
- GET /api/reviews/:movieId - Obtener reseñas de una película
- POST /api/reviews - Crear nueva reseña
- GET /api/favorites - Obtener favoritos del usuario
- POST /api/favorites - Añadir película a favoritos

## Comandos Útiles de Docker

```bash
# Ver logs de los contenedores
docker-compose logs

# Reiniciar contenedores
docker-compose restart

# Detener contenedores
docker-compose down

# Reconstruir contenedores
docker-compose up --build
```

## Solución de Problemas Comunes

1. Si el frontend no puede conectar con el backend:
   - Verifica que el backend esté corriendo (http://localhost:3000)
   - Comprueba los logs del backend: `docker-compose logs backend`

2. Si las películas no cargan:
   - Verifica tu API key de TMDB en el archivo .env
   - Comprueba la consola del navegador para errores
   - Verifica los logs del backend

3. Si la base de datos no conecta:
   - Verifica que MongoDB esté corriendo: `docker-compose logs mongodb`
   - Comprueba la URL de conexión en el backend


