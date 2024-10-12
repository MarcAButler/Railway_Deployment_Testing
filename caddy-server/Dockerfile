# Caddy Build Image
FROM caddy:2.7.6-alpine

ARG PORT
ARG CADDY_BACKEND_HOST
ARG CADDY_BACKEND_PORT

# Copy Caddyfile
COPY caddy-server/Caddyfile /etc/caddy/Caddyfile

RUN caddy fmt --overwrite /etc/caddy/Caddyfile
