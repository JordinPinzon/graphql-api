# Usa una imagen base de Node.js (versión 18 para soporte moderno de ECMAScript)
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto utilizado por Apollo Server
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]

