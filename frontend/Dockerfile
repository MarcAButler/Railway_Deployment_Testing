# Build React Image
FROM node:21-alpine AS frontend

# React / Yarn / Node stuff
ARG VITE_SERVER_URL
ARG VITE_PORT

COPY ./package*.json ./yarn.lock ./

RUN yarn --network-timeout 600000 && yarn install --network-timeout 600000

COPY . .

RUN yarn build



# Caddy Build Image
FROM caddy:2.7.6-alpine

ARG PORT
ARG CADDY_BACKEND_HOST
ARG CADDY_BACKEND_PORT

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Copy the built application from the previous stage
COPY --from=frontend dist /srv
COPY --from=frontend dist /var/www/html

RUN caddy fmt --overwrite /etc/caddy/Caddyfile

# What does this do?
# ENTRYPOINT ["caddy"]

# # What does this do?
# CMD ["run", "--config", "Caddyfile", "--adapter", "caddyfile", "2>&1"]