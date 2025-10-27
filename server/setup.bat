@echo off
REM Script de configuración para el backend de Domus
echo 🚀 Configurando el backend de Domus...

REM Verificar si Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado. Por favor instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detectado: 
node --version

REM Instalar dependencias
echo 📦 Instalando dependencias...
cd server
npm install

if %errorlevel% neq 0 (
    echo ❌ Error al instalar dependencias
    pause
    exit /b 1
)

echo ✅ Dependencias instaladas correctamente

REM Crear archivo .env si no existe
if not exist .env (
    echo 📝 Creando archivo de configuración .env...
    copy env.example .env
    echo ✅ Archivo .env creado
    echo.
    echo ⚠️  IMPORTANTE: Debes configurar las variables de entorno en server/.env
    echo    Especialmente las credenciales SMTP para el envío de emails
    echo.
    echo 📧 Para Gmail, necesitas:
    echo    1. Habilitar la verificación en 2 pasos
    echo    2. Generar una contraseña de aplicación
    echo    3. Usar esa contraseña en SMTP_PASS
    echo.
) else (
    echo ✅ Archivo .env ya existe
)

echo.
echo 🎉 Configuración completada!
echo.
echo 📋 Próximos pasos:
echo    1. Configura las variables SMTP en server/.env
echo    2. Ejecuta 'npm run dev' en la carpeta server para iniciar el backend
echo    3. Ejecuta 'npm run dev' en la carpeta raíz para iniciar el frontend
echo.
echo 🔗 URLs:
echo    Frontend: http://localhost:5173
echo    Backend:  http://localhost:3001
echo    Health:   http://localhost:3001/api/health
echo.
pause