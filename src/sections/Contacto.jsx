import React, { useState } from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, Space, message } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  SendOutlined,
  LoadingOutlined,
  MessageOutlined,
  UserOutlined,
  MailFilled,
  PhoneFilled,
  EnvironmentFilled
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contacto = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <PhoneFilled style={{ fontSize: 28, color: 'white' }} />,
      title: 'Teléfono',
      content: '+5493534128030',
      href: 'tel:+5493534128030',
      gradient: 'linear-gradient(135deg, #274181, #95CDD1)'
    },
    {
      icon: <MailFilled style={{ fontSize: 28, color: 'white' }} />,
      title: 'Email',
      content: 'info@humanixtech.com',
      href: 'mailto:info@humanixtech.com',
      gradient: 'linear-gradient(135deg, #F6963F, #FFB74D)'
    },
    {
      icon: <EnvironmentFilled style={{ fontSize: 28, color: 'white' }} />,
      title: 'Ubicación',
      content: 'Corrientes 1098, Villa Maria, Córdoba',
      href: null,
      gradient: 'linear-gradient(135deg, #D95766, #E57373)'
    }
  ];

  const onFinish = async (values) => {
    setIsLoading(true);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject || 'Consulta desde el sitio web',
          message: values.message,
          phone: values.phone || null,
          company: '' // Honeypot field
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el mensaje');
      }

      message.success('¡Mensaje enviado correctamente! Te contactaremos pronto.');
      form.resetFields();
      
    } catch (error) {
      if (error.name === 'AbortError') {
        message.error('Tiempo de espera agotado. Por favor, intenta nuevamente.');
      } else {
        message.error(error.message || 'Error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('El email es requerido'));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error('Por favor, ingresa un email válido'));
    }
    return Promise.resolve();
  };

  const validateMessage = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('El mensaje es requerido'));
    }
    if (value.length < 10) {
      return Promise.reject(new Error('El mensaje debe tener al menos 10 caracteres'));
    }
    return Promise.resolve();
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "humanix-tech",
            "telephone": "+5493534128030",
            "email": "info@humanixtech.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Corrientes 1098",
              "addressRegion": "Córdoba",
              "addressCountry": "Argentina"
            }
          })
        }}
      />
      
      <section 
        id="contacto"
        style={{ 
          padding: '100px 0',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decoraciones de fondo */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(39, 65, 129, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-8%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(149, 205, 209, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(246, 150, 63, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />

        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '0 24px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Title 
              level={1} 
              style={{ 
                color: '#0B3C5D',
                marginBottom: 32,
                fontSize: '4rem',
                fontWeight: 800,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #0B3C5D, #274181)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative'
              }}
            >
              Contacto
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '6px',
                background: 'linear-gradient(90deg, #F6963F, #D95766)',
                borderRadius: '3px'
              }} />
            </Title>
            
            <Text 
              style={{ 
                fontSize: '1.375rem',
                color: '#4B5563',
                maxWidth: 600,
                margin: '0 auto',
                display: 'block',
                fontWeight: 500,
                lineHeight: 1.7
              }}
            >
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte. 
            </Text>
          </div>

          {/* Main Content */}
          <Row gutter={[40, 40]}>
            {/* Información de contacto */}
            <Col xs={24} md={8}>
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 12px 40px rgba(39, 65, 129, 0.15)',
                border: 'none',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decoración de fondo */}
                <div style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  background: 'linear-gradient(135deg, rgba(39, 65, 129, 0.1), rgba(149, 205, 209, 0.1))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #274181, #95CDD1)',
                    borderRadius: '16px',
                    marginBottom: 24,
                    boxShadow: '0 8px 20px rgba(39, 65, 129, 0.3)'
                  }}>
                    <MessageOutlined style={{ fontSize: 28, color: 'white' }} />
                  </div>

                  <Title 
                    level={2} 
                    style={{ 
                      color: '#274181',
                      marginBottom: 32,
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      lineHeight: 1.1
                    }}
                  >
                    Información de Contacto
                  </Title>
                  
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    {contactInfo.map((info, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 20,
                        padding: '20px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '16px',
                        border: '1px solid rgba(149, 205, 209, 0.2)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(39, 65, 129, 0.15)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                      }}
                      >
                        <div style={{ 
                          background: `${info.gradient}`,
                          padding: '16px',
                          borderRadius: '16px',
                          boxShadow: '0 4px 12px rgba(39, 65, 129, 0.2)'
                        }}>
                          {info.icon}
                        </div>
                        <div>
                          <Text 
                            style={{ 
                              color: '#4B5563', 
                              fontSize: 14, 
                              fontWeight: 600,
                              display: 'block',
                              marginBottom: 6,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}
                          >
                            {info.title}
                          </Text>
                          {info.href ? (
                            <a 
                              href={info.href}
                              style={{ 
                                color: '#274181',
                                fontSize: 16,
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                              }}
                              onMouseEnter={(e) => e.target.style.color = '#95CDD1'}
                              onMouseLeave={(e) => e.target.style.color = '#274181'}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <Text style={{ 
                              color: '#274181', 
                              fontSize: 16,
                              fontWeight: 500
                            }}>
                              {info.content}
                            </Text>
                          )}
                        </div>
                      </div>
                    ))}
                  </Space>
                </div>
              </div>
            </Col>

            {/* Divisor visual */}
            <Col xs={24} md={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: '3px',
                height: '300px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(149, 205, 209, 0.3) 20%, rgba(39, 65, 129, 0.4) 50%, rgba(149, 205, 209, 0.3) 80%, transparent 100%)',
                borderRadius: '2px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '12px',
                  height: '12px',
                  background: 'linear-gradient(135deg, #274181, #95CDD1)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(39, 65, 129, 0.3)'
                }} />
              </div>
            </Col>

            {/* Formulario */}
            <Col xs={24} md={15}>
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 12px 40px rgba(39, 65, 129, 0.15)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decoración de fondo */}
                <div style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  background: 'linear-gradient(135deg, rgba(149, 205, 209, 0.1), rgba(39, 65, 129, 0.1))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    background: 'linear-gradient(135deg, #95CDD1, #274181)',
                    borderRadius: '16px',
                    marginBottom: 24,
                    boxShadow: '0 8px 20px rgba(149, 205, 209, 0.3)'
                  }}>
                    <UserOutlined style={{ fontSize: 28, color: 'white' }} />
                  </div>

                  <Title 
                    level={2} 
                    style={{ 
                      color: '#274181',
                      marginBottom: 32,
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      lineHeight: 1.1
                    }}
                  >
                    Envíanos un Mensaje
                  </Title>
                  
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    size="large"
                  >
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="name"
                          label={<Text style={{ color: '#4B5563', fontWeight: 600, fontSize: 14 }}>Nombre <span style={{ color: '#D95766', fontWeight: 'bold' }}>*</span></Text>}
                          rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}
                        >
                          <Input
                            placeholder="Tu nombre completo"
                            style={{
                              borderRadius: 12,
                              borderColor: 'rgba(149, 205, 209, 0.3)',
                              padding: '16px 20px',
                              fontSize: 16,
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease'
                            }}
                            aria-describedby="name-error"
                            onFocus={(e) => {
                              e.target.style.borderColor = '#95CDD1';
                              e.target.style.boxShadow = '0 0 0 3px rgba(149, 205, 209, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(149, 205, 209, 0.3)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="email"
                          label={<Text style={{ color: '#4B5563', fontWeight: 600, fontSize: 14 }}>Email <span style={{ color: '#D95766', fontWeight: 'bold' }}>*</span></Text>}
                          rules={[{ validator: validateEmail }]}
                        >
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            style={{
                              borderRadius: 12,
                              borderColor: 'rgba(149, 205, 209, 0.3)',
                              padding: '16px 20px',
                              fontSize: 16,
                              background: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease'
                            }}
                            aria-describedby="email-error"
                            onFocus={(e) => {
                              e.target.style.borderColor = '#95CDD1';
                              e.target.style.boxShadow = '0 0 0 3px rgba(149, 205, 209, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(149, 205, 209, 0.3)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="subject"
                      label={<Text style={{ color: '#4B5563', fontWeight: 600, fontSize: 14 }}>Asunto</Text>}
                    >
                      <Input
                        placeholder="¿En qué podemos ayudarte?"
                        style={{
                          borderRadius: 12,
                          borderColor: 'rgba(149, 205, 209, 0.3)',
                          padding: '16px 20px',
                          fontSize: 16,
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#95CDD1';
                          e.target.style.boxShadow = '0 0 0 3px rgba(149, 205, 209, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(149, 205, 209, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label={<Text style={{ color: '#4B5563', fontWeight: 600, fontSize: 14 }}>Mensaje <span style={{ color: '#D95766', fontWeight: 'bold' }}>*</span></Text>}
                      rules={[{ validator: validateMessage }]}
                    >
                      <TextArea
                        rows={5}
                        placeholder="Escribe tu mensaje aquí..."
                        style={{
                          borderRadius: 12,
                          borderColor: 'rgba(149, 205, 209, 0.3)',
                          padding: '16px 20px',
                          fontSize: 16,
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          resize: 'vertical',
                          transition: 'all 0.3s ease'
                        }}
                        aria-describedby="message-error"
                        onFocus={(e) => {
                          e.target.style.borderColor = '#95CDD1';
                          e.target.style.boxShadow = '0 0 0 3px rgba(149, 205, 209, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(149, 205, 209, 0.3)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </Form.Item>

                    {/* Honeypot field */}
                    <Form.Item name="company" style={{ display: 'none' }}>
                      <Input />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        icon={isLoading ? <LoadingOutlined /> : <SendOutlined />}
                        loading={isLoading}
                        disabled={isLoading}
                        style={{
                          width: '100%',
                          height: 56,
                          borderRadius: 12,
                          background: 'linear-gradient(135deg, #274181, #95CDD1)',
                          borderColor: 'transparent',
                          fontSize: 18,
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                          boxShadow: '0 8px 24px rgba(39, 65, 129, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          if (!isLoading) {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 12px 32px rgba(39, 65, 129, 0.4)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isLoading) {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 8px 24px rgba(39, 65, 129, 0.3)';
                          }
                        }}
                      >
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contacto;