# =========================================================
# ETAPA 1: CONSTRUCCIÓN DE REACT
# =========================================================
FROM node:24-alpine AS construccion

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# =========================================================
# ETAPA 2: SERVIDOR NGINX DEL MÓDULO INMERSIVO
# =========================================================
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/* \
    && mkdir -p /usr/share/nginx/html/inmersivo

COPY --from=construccion \
    /app/dist/ \
    /usr/share/nginx/html/inmersivo/

EXPOSE 80