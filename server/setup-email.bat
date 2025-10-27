@echo off
echo Configurando el servidor de correo para Domus...
echo.

REM Crear archivo .env si no existe
if not exist ".env" (
    echo Creando archivo .env...
    (
        echo # Server Configuration
        echo PORT=3001
        echo NODE_ENV=development
        echo.
        echo # Frontend URL ^(for CORS^)
        echo FRONTEND_URL=http://localhost:5173
        echo.
        echo # Email Configuration
        echo SITE_EMAIL=molinerobarbararuth@gmail.com
        echo.
        echo # SMTP Configuration ^(Gmail^)
        echo SMTP_HOST=smtp.gmail.com
        echo SMTP_PORT=587
        echo SMTP_USER=molinerobarbararuth@gmail.com
        echo SMTP_PASS=your-app-password-here
    ) > .env
    echo Archivo .env creado exitosamente.
) else (
    echo El archivo .env ya existe.
)

echo.
echo IMPORTANTE: Para que el formulario funcione correctamente:
echo 1. Abre el archivo .env
echo 2. Reemplaza "your-app-password-here" con tu contraseña de aplicacion de Gmail
echo 3. Si no tienes una contraseña de aplicacion:
echo    - Ve a tu cuenta de Google
echo    - Activa la verificacion en 2 pasos
echo    - Genera una contraseña de aplicacion para "Correo"
echo.
echo Para iniciar el servidor:
echo npm install
echo npm run dev
echo.
pause






