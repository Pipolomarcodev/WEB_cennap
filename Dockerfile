# Etapa de construcción (con Node.js)
FROM node:14 AS builder

WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./
RUN npm install

# Ajusta la tarea de construcción según las necesidades de tu proyecto
RUN npm run build

# Etapa de producción (con Nginx)
FROM nginx:latest

# Elimina la configuración predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos de la etapa de construcción al directorio de Nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 80









