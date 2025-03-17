FROM node:18-alpine

WORKDIR /app

# Instalar dependencias necesarias para bcrypt
RUN apk add --no-cache python3 make g++

COPY package*.json ./

# Instalar dependencias y reconstruir bcrypt
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 