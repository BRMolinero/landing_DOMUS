#!/bin/bash

# Script de configuración para el backend de Domus
echo "🚀 Configurando el backend de Domus..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org/"
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Se requiere Node.js versión 16 o superior. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
cd server
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"

# Crear archivo .env si no existe
if [ ! -f .env ]; then
    echo "📝 Creando archivo de configuración .env..."
    cp env.example .env
    echo "✅ Archivo .env creado"
    echo ""
    echo "⚠️  IMPORTANTE: Debes configurar las variables de entorno en server/.env"
    echo "   Especialmente las credenciales SMTP para el envío de emails"
    echo ""
    echo "📧 Para Gmail, necesitas:"
    echo "   1. Habilitar la verificación en 2 pasos"
    echo "   2. Generar una contraseña de aplicación"
    echo "   3. Usar esa contraseña en SMTP_PASS"
    echo ""
else
    echo "✅ Archivo .env ya existe"
fi

echo ""
echo "🎉 Configuración completada!"
echo ""
echo "📋 Próximos pasos:"
echo "   1. Configura las variables SMTP en server/.env"
echo "   2. Ejecuta 'npm run dev' en la carpeta server para iniciar el backend"
echo "   3. Ejecuta 'npm run dev' en la carpeta raíz para iniciar el frontend"
echo ""
echo "🔗 URLs:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:3001"
echo "   Health:   http://localhost:3001/api/health"