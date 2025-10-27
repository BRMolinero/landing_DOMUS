# humanix-tech - Domüs Landing Page

Una landing page moderna y responsive para humanix-tech, desarrollada con React, Ant Design v5 y Vite.

## 🏢 Empresa/Marca: humanix-tech
**Producto: Domüs** (del latín "hogar")

### Propósito
En Humanix creamos tecnología asistiva que acompaña, protege y empodera a las personas en su vida cotidiana. Con Domüs buscamos brindar autonomía, seguridad y compañía a quienes enfrentan desafíos de movilidad o visión reducida, y tranquilidad a sus familias.

### Misión
En Humanix creemos que la tecnología puede ser mucho más que funcional: puede ser empática, cálida y humana. Por eso creamos soluciones que acompañan, protegen y empoderan a las personas, brindándoles independencia y tranquilidad a sus familias.

### Visión
Soñamos con un futuro donde la innovación esté al servicio del cuidado, y donde cada avance tecnológico acerque más a las personas a una vida plena, segura y autónoma.

### Slogan
**«Domüs: Diseñado para moverse. Creado para acompañar»**

### Valores
- **Autonomía**: Dar independencia real al usuario.
- **Seguridad**: Evitar accidentes, pedir ayuda en emergencias.
- **Cercanía**: Robot amigable, diseño cálido y humano.
- **Accesibilidad**: APP adaptable, uso intuitivo, sin barreras.
- **Confianza**: Tranquilidad para usuarios y familiares.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Modo Oscuro**: Tema claro/oscuro con persistencia en localStorage
- **Navegación Suave**: Smooth scroll entre secciones
- **Accesibilidad**: Cumple estándares WCAG AA
- **Componentes Reutilizables**: Arquitectura modular
- **SEO Optimizado**: Meta tags y estructura semántica

## 🤖 Propuesta de Valor - Domüs

### Definición general
Domüs es un robot que brinda asistencia, diseñado para mejorar la autonomía, seguridad y calidad de vida de personas con movilidad reducida, visión reducida y adultos mayores. Su propuesta de valor se centra en humanizar la tecnología para que funcione como un aliado cotidiano, tanto para los usuarios directos como para sus familias y cuidadores.

### Componentes claves de la propuesta de valor

#### Beneficios funcionales (lo que hace Domüs)
- **Movilidad autónoma**: Domüs se desplaza sin chocar obstáculos gracias a sensores inteligentes.
- **Asistencia activa**: busca y transporta objetos solicitados por el usuario.
- **Seguridad en el hogar**: evita accidentes domésticos, alerta en caso de emergencia, mide condiciones climáticas.
- **Conectividad con familiares**: permite enviar notificaciones inmediatas a contactos de confianza o servicios de emergencia.
- **Compatibilidad digital**: aplicación adaptable a cualquier pantalla, accesible y fácil de usar.
- **Eficiencia energética**: batería de bajo consumo, asegurando continuidad en la asistencia.

#### Beneficios emocionales (lo que significa para el usuario)
- **Autonomía personal**: vivir sin depender en exceso de terceros.
- **Tranquilidad y confianza**: tanto para usuarios como para sus familiares.
- **Sensación de compañía**: robot amigable, con diseño cálido y no intimidante.
- **Reducción del miedo al error o descuido**: apoyo constante en situaciones cotidianas (ej. caídas, olvidos).

#### Diferenciadores de Domüs frente a alternativas existentes
- No es solo un dispositivo fijo: tiene movilidad propia y autonomía real.
- Combina asistencia práctica (buscar objetos) con seguridad proactiva (detección de obstáculos, notificaciones de emergencia).
- Interfaz digital inclusiva y universal, adaptable a distintas capacidades visuales.
- Diseño amigable y ergonómico, pensado para integrarse en el hogar como un miembro más y no como una máquina invasiva.

## 📱 Secciones

- **Hero**: Presentación principal con call-to-action
- **Quiénes Somos**: Misión, visión y valores de humanix-tech
- **Producto**: Características de Domüs con paleta de colores exclusiva
- **Contacto**: Formulario de contacto y información

## 🎨 Paleta de Colores

### Colores Generales
- Primario: `#0B3C5D`
- Acento: `#00C2C7`
- Info: `#1E88E5`
- Fondo base: `#F5FAFF`
- Texto: `#0A1F2E`

### Paleta Exclusiva - Sección Producto
- Aqua claro: `#95CDD1`
- Azul profundo: `#274181`
- Naranja: `#F6963F`
- Coral: `#D95766`
- Cian brillante: `#0DC0E8`
- Blanco cálido: `#F5F2F2`

## 🛠️ Tecnologías

### Frontend
- **React 18**: Framework principal
- **Ant Design v5**: Sistema de componentes
- **Vite**: Build tool y dev server
- **React Router**: Navegación
- **CSS3**: Estilos personalizados

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **Nodemailer**: Envío de emails
- **Express Rate Limit**: Control de velocidad
- **Express Validator**: Validación de datos
- **Helmet**: Seguridad HTTP
- **CORS**: Configuración de origen cruzado

## 📦 Instalación

### Frontend (Landing Page)

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

3. **Build para producción**
   ```bash
   npm run build
   ```

### Backend (API de Contacto)

El backend es necesario para que el formulario de contacto funcione correctamente.

1. **Configuración automática**
   
   **Windows:**
   ```bash
   server/setup.bat
   ```
   
   **Linux/Mac:**
   ```bash
   chmod +x server/setup.sh
   ./server/setup.sh
   ```

2. **Configuración manual**
   ```bash
   cd server
   npm install
   cp env.example .env
   # Editar .env con tus credenciales SMTP
   ```

3. **Iniciar backend**
   ```bash
   cd server
   npm run dev
   ```

### Desarrollo completo

Para iniciar tanto frontend como backend simultáneamente:

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### URLs de desarrollo
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3002
- **Health Check:** http://localhost:3002/api/health

## 🎯 Funcionalidades

### Navegación
- Navbar sticky con menú responsive
- Smooth scroll a secciones
- Botón de modo oscuro/claro
- Enlace a página de login (placeholder)

### Componentes
- **WhatsAppButton**: Botón flotante de contacto
- **LegalModal**: Modales para términos y privacidad
- **Footer**: Información legal y redes sociales

### Accesibilidad
- Navegación por teclado
- Focos visibles
- Tamaños táctiles ≥44px
- aria-labels en elementos interactivos
- Soporte para lectores de pantalla

## 📁 Estructura del Proyecto

```
├── src/                    # Frontend (React)
│   ├── components/         # Componentes reutilizables
│   │   ├── LegalModal.jsx
│   │   └── WhatsAppButton.jsx
│   ├── layout/            # Componentes de layout
│   │   ├── AppLayout.jsx
│   │   └── Footer.jsx
│   ├── pages/             # Páginas
│   │   └── LoginPlaceholder.jsx
│   ├── sections/          # Secciones de la landing
│   │   ├── Hero.jsx
│   │   ├── WhoWeAre.jsx
│   │   ├── Product.jsx
│   │   └── Contacto.jsx
│   ├── styles/            # Configuración de temas
│   │   └── theme.js
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── server/                # Backend (Node.js/Express)
│   ├── index.js           # Servidor principal
│   ├── package.json       # Dependencias del backend
│   ├── env.example        # Ejemplo de variables de entorno
│   ├── setup.sh           # Script de configuración (Linux/Mac)
│   ├── setup.bat          # Script de configuración (Windows)
│   └── README.md          # Documentación del backend
├── start-dev.sh           # Script de inicio completo (Linux/Mac)
├── start-dev.bat          # Script de inicio completo (Windows)
├── package.json           # Dependencias del frontend
├── vite.config.js         # Configuración de Vite
└── README.md              # Este archivo
```

## 🔧 Configuración

### Temas
Los temas están configurados en `src/styles/theme.js`:
- `lightTheme`: Tema claro por defecto
- `darkTheme`: Tema oscuro
- `productTheme`: Tema especial para la sección Producto

### Rutas
- `/`: Landing page principal
- `/login`: Página de login (placeholder)

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: xs, sm, md, lg, xl
- **Menú Móvil**: Drawer lateral en dispositivos pequeños
- **Imágenes**: Optimizadas para diferentes resoluciones

## 🌐 SEO y Meta Tags

- Meta description optimizada
- Open Graph tags para redes sociales
- Favicon y og-cover personalizados
- Estructura semántica HTML5

## 🚀 Deployment

El proyecto está listo para deployment en cualquier plataforma que soporte aplicaciones React:

- **Vercel**: `vercel --prod`
- **Netlify**: Conecta el repositorio
- **GitHub Pages**: Usa `npm run build` y sube la carpeta `dist`

## 📄 Licencia

Este proyecto es propiedad de humanix-tech. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte técnico o consultas:
- Email: info@humanixtech.com
- Teléfono: +5493534128030
- Ubicación: Corrientes 1098, Villa Maria, Córdoba
- WhatsApp: Disponible en el botón flotante

---


