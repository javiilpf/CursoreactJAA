import app from './src/app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/videoclub';

mongoose.set('strictQuery', false);

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado a MongoDB');

    const server = app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });

    // Manejo de errores del servidor
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`❌ Puerto ${PORT} está en uso. Intentando con otro puerto...`);
        server.close();
        startServer();
      } else {
        console.error('❌ Error en el servidor:', error);
      }
    });

  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

startServer();

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
  process.exit(1);
});

// Manejar errores después de la conexión inicial
mongoose.connection.on('error', err => {
    console.error('Error de MongoDB:', err);
});