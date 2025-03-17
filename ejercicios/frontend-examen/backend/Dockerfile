# Usar una imagen base de Node.js
FROM node:20

# Instalar netcat y bash
RUN apt-get update && apt-get install -y \
    bash \
    netcat-traditional \
    && rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Dar permisos de ejecución al script wait-for-it
RUN chmod +x wait-for-it.sh

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# El comando se moverá al docker-compose.yml para usar wait-for-it
CMD ["npm", "run", "dev"]
