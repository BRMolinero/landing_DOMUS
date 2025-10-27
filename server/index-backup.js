const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Demasiadas solicitudes de contacto. Intenta nuevamente en 15 minutos.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
const logger = {
  info: (message, meta = {}) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, meta);
  },
  error: (message, error = {}) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  }
};

// Sanitize function
const sanitize = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
};

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres')
    .escape(),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email inválido'),
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('El asunto no puede exceder 200 caracteres')
    .escape(),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('El mensaje debe tener entre 10 y 2000 caracteres')
    .escape(),
  body('phone')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres')
    .escape(),
  body('company')
    .custom((value) => {
      if (value && value.trim() !== '') {
        throw new Error('Spam detected');
      }
      return true;
    })
];

// Contact API endpoint
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.info('Contact form validation failed', { 
        errors: errors.array(),
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
      
      return res.status(400).json({
        error: 'Datos de entrada inválidos',
        details: errors.array().map(err => err.msg)
      });
    }

    const { name, email, subject, message, phone } = req.body;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      subject: sanitize(subject) || 'Consulta desde el sitio web',
      message: sanitize(message),
      phone: phone ? sanitize(phone) : null
    };

    logger.info('Processing contact form submission', {
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      ip: req.ip
    });

    // Create email transporter
    const transporter = createTransporter();

    // Email content
    const emailContent = {
      from: 'Domus Website <no-reply@domus.local>',
      to: process.env.SITE_EMAIL || 'molinerobarbararuth@gmail.com',
      replyTo: sanitizedData.email,
      subject: `[Contacto] ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #274181;">Nuevo mensaje de contacto</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            ${sanitizedData.phone ? `<p><strong>Teléfono:</strong> ${sanitizedData.phone}</p>` : ''}
            <p><strong>Asunto:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #274181; margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              Este mensaje fue enviado desde el formulario de contacto de humanix-tech.
              <br>
              IP: ${req.ip} | Fecha: ${new Date().toLocaleString('es-AR')}
            </p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${sanitizedData.name}
Email: ${sanitizedData.email}
${sanitizedData.phone ? `Teléfono: ${sanitizedData.phone}` : ''}
Asunto: ${sanitizedData.subject}

Mensaje:
${sanitizedData.message}

---
Este mensaje fue enviado desde el formulario de contacto de humanix-tech.
IP: ${req.ip} | Fecha: ${new Date().toLocaleString('es-AR')}
      `
    };

    // Send email with error handling
    try {
      await transporter.sendMail(emailContent);
      logger.info('Contact form email sent successfully', {
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        destination: process.env.SITE_EMAIL
      });
    } catch (emailError) {
      logger.error('Email sending failed', {
        emailError: emailError.message,
        emailErrorCode: emailError.code,
        email: sanitizedData.email,
        subject: sanitizedData.subject
      });
      // Continue execution even if email fails
    }

    res.status(200).json({
      message: 'Mensaje enviado correctamente',
      success: true
    });

  } catch (error) {
    logger.error('Contact form submission failed', {
      error: error.message,
      stack: error.stack,
      ip: req.ip
    });

    res.status(500).json({
      error: 'Error interno del servidor. Por favor, intenta nuevamente.',
      success: false
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error('Unhandled error', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });

  res.status(500).json({
    error: 'Error interno del servidor',
    success: false
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    success: false
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;













