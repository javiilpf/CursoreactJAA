FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_API_URL=http://localhost:3000/api

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"] 