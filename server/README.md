# Backend Domus - API de Contacto

Backend funcional para el formulario de contacto de la landing page de Domus.

## 🚀 Características

- ✅ Endpoint `/api/contact` para procesar formularios de contacto
- ✅ Validación completa de datos de entrada
- ✅ Envío de emails usando Nodemailer
- ✅ Rate limiting para prevenir spam
- ✅ Sanitización de datos para seguridad
- ✅ Logging detallado de eventos
- ✅ Configuración CORS para desarrollo
- ✅ Health check endpoint

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn
- Cuenta de email con SMTP habilitado (Gmail recomendado)

## ⚙️ Configuración

### 1. Instalación automática

**Windows:**
```bash
setup.bat
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### 2. Configuración manual

```bash
cd server
npm install
cp env.example .env
```

### 3. Configurar variables de entorno

Edita el archivo `server/.env` con tus credenciales:

```env
# Configuración del servidor
PORT=3001
NODE_ENV=development

# URL del frontend (para CORS)
FRONTEND_URL=http://localhost:5173

# Email de destino para los formularios de contacto
SITE_EMAIL=molinerobarbararuth@gmail.com

# Configuración SMTP para Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
```

## 📧 Configuración de Gmail

Para usar Gmail como servidor SMTP:

1. **Habilitar verificación en 2 pasos:**
   - Ve a tu cuenta de Google
   - Seguridad → Verificación en 2 pasos
   - Actívala si no está activada

2. **Generar contraseña de aplicación:**
   - Ve a Seguridad → Contraseñas de aplicaciones
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Escribe "Domus Backend"
   - Copia la contraseña generada

3. **Usar la contraseña en .env:**
   ```env
   SMTP_USER=tu-email@gmail.com
   SMTP_PASS=la-contraseña-generada
   ```

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

## 📡 Endpoints

### POST `/api/contact`
Procesa el formulario de contacto.

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "subject": "Consulta sobre servicios",
  "message": "Hola, me interesa conocer más sobre...",
  "phone": "+5491234567890"
}
```

**Respuesta exitosa:**
```json
{
  "message": "Mensaje enviado correctamente",
  "success": true
}
```

### GET `/api/health`
Health check del servidor.

**Respuesta:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 123.456
}
```

## 🔒 Seguridad

- **Rate Limiting:** Máximo 10 requests por IP cada 15 minutos
- **Validación:** Todos los campos son validados y sanitizados
- **Honeypot:** Campo oculto para detectar bots
- **CORS:** Configurado para el dominio del frontend
- **Helmet:** Headers de seguridad HTTP

## 📝 Logs

El servidor registra:
- ✅ Envíos exitosos de formularios
- ❌ Errores de validación
- ❌ Errores de envío de email
- ❌ Errores del servidor

## 🐛 Troubleshooting

### Error de autenticación SMTP
- Verifica que la verificación en 2 pasos esté activada
- Usa la contraseña de aplicación, no tu contraseña normal
- Verifica que `SMTP_USER` sea el email correcto

### Error de conexión
- Verifica que el puerto 3001 esté libre
- Revisa la configuración de CORS si hay problemas de conexión desde el frontend

### Rate limit excedido
- Espera 15 minutos o cambia la IP
- Ajusta la configuración en `index.js` si es necesario

## 📁 Estructura

```
server/
├── index.js          # Servidor principal
├── package.json      # Dependencias
├── env.example       # Ejemplo de variables de entorno
├── setup.sh          # Script de configuración (Linux/Mac)
├── setup.bat         # Script de configuración (Windows)
└── README.md         # Este archivo
```

## 🔗 URLs de desarrollo

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3002
- **Health Check:** http://localhost:3002/api/health

## 📞 Soporte

Para problemas o consultas, contacta a: molinerobarbararuth@gmail.com