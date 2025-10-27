#!/bin/bash

echo "Configurando el servidor de correo para Domus..."
echo

# Crear archivo .env si no existe
if [ ! -f ".env" ]; then
    echo "Creando archivo .env..."
    cat > .env << EOF
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration
SITE_EMAIL=molinerobarbararuth@gmail.com

# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=molinerobarbararuth@gmail.com
SMTP_PASS=your-app-password-here
EOF
    echo "Archivo .env creado exitosamente."
else
    echo "El archivo .env ya existe."
fi

echo
echo "IMPORTANTE: Para que el formulario funcione correctamente:"
echo "1. Abre el archivo .env"
echo "2. Reemplaza 'your-app-password-here' con tu contraseña de aplicación de Gmail"
echo "3. Si no tienes una contraseña de aplicación:"
echo "   - Ve a tu cuenta de Google"
echo "   - Activa la verificación en 2 pasos"
echo "   - Genera una contraseña de aplicación para 'Correo'"
echo
echo "Para iniciar el servidor:"
echo "npm install"
echo "npm run dev"
echo






