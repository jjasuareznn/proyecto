#!/bin/bash

# Script para despliegue manual a GitHub Pages (opcional)
# Uso: ./scripts/deploy-pages.sh

set -e

echo "📦 Instalando dependencias..."
npm ci

echo "✅ Ejecutando verificaciones..."
npm run check

echo "🔨 Construyendo aplicación..."
npm run build

echo "🚀 Construcción completada. El contenido está en la carpeta 'build/'"
echo "   Se desplegará automáticamente en GitHub Pages en el siguiente push a main"
