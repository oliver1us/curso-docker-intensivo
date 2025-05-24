#!/bin/sh

echo "🔧 Sustituyendo variables en config.json..."
envsubst '${API_URL}' < /usr/share/nginx/html/config.json > /usr/share/nginx/html/config.runtime.json
mv /usr/share/nginx/html/config.runtime.json /usr/share/nginx/html/config.json

echo "🚀 Iniciando Nginx..."
exec nginx -g 'daemon off;'
