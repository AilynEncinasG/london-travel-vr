# =========================================================
# ETAPA 1: CONSTRUCCIÓN DE LA APLICACIÓN REACT
# =========================================================
FROM node:24-alpine AS construccion

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# =========================================================
# ETAPA 2: SERVIDOR WEB NGINX
# =========================================================
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=construccion /app/dist /usr/share/nginx/html

EXPOSE 80