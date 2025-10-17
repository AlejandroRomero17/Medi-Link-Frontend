# Etapa 1: Construcción
FROM node:20-alpine AS builder

# Crear directorio de la app
WORKDIR /app

# Copiar solo package.json y package-lock.json para cache de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código
COPY . .

# Construir la app de Next.js
RUN npm run build

# Etapa 2: Ejecución
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar solo lo necesario desde builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exponer el puerto en el que Next.js corre
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
