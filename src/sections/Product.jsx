import React from 'react';
import { Row, Col, Typography, Card, Button, Tag, ConfigProvider } from 'antd';
import { 
  AppstoreOutlined, 
  SearchOutlined, 
  CloudOutlined, 
  ExclamationCircleOutlined,
  DownloadOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { productTheme } from '../styles/theme';

const { Title, Paragraph } = Typography;

const Product = () => {
  const features = [
    {
      icon: <CloudOutlined style={{ fontSize: 40, color: 'white' }} />,
      title: 'Monitoreo Ambiental',
      description: 'Mide temperatura, humedad y calidad del aire para mantener un ambiente saludable en el hogar.',
      borderColor: '#00C2C7',
      iconBg: '#00C2C7',
      titleColor: '#00C2C7',
      gradient: 'linear-gradient(135deg, #00C2C7, #4DD0E1)',
      bgGradient: 'linear-gradient(135deg, rgba(0, 194, 199, 0.1), rgba(77, 208, 225, 0.05))'
    },
    {
      icon: <ExclamationCircleOutlined style={{ fontSize: 40, color: 'white' }} />,
      title: 'Detección de Gases Tóxicos',
      description: 'Sensor interno que alerta con sonido y aviso automático sobre fugas de gases tóxicos, siendo una función preventiva vital.',
      borderColor: '#D95766',
      iconBg: '#D95766',
      titleColor: '#D95766',
      gradient: 'linear-gradient(135deg, #D95766, #E57373)',
      bgGradient: 'linear-gradient(135deg, rgba(217, 87, 102, 0.1), rgba(229, 115, 115, 0.05))'
    }
  ];

  return (
    <ConfigProvider theme={productTheme}>
      <section 
        id="product"
        style={{ 
          padding: '100px 0',
          background: 'linear-gradient(135deg, #0B3C5D 0%, #1a4a6b 50%, #274181 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decoraciones de fondo */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(149, 205, 209, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '-8%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(246, 150, 63, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(217, 87, 102, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />

        {/* Decorative gradient bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #95CDD1, #0DC0E8, #F6963F, #D95766)',
          opacity: 0.3,
          zIndex: 1
        }} />

        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '0 24px',
          position: 'relative',
          zIndex: 1
        }}>
          <Row gutter={[48, 48]}>
            <Col xs={24}>
              <div style={{ textAlign: 'center', marginBottom: 80 }}>
                <Title 
                  level={2} 
                  style={{ 
                    color: 'white',
                    marginBottom: 48,
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #ffffff 0%, #95CDD1 50%, #F6963F 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative'
                  }}
                >
                  Nuestro Producto
                  <div style={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #F6963F, #D95766, #95CDD1)',
                    borderRadius: '3px'
                  }} />
                </Title>
                
                {/* Logo de Domus */}
                <div style={{
                  marginTop: 48,
                  marginBottom: 48,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <div 
                    className="domus-logo-container"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                      borderRadius: '24px',
                      padding: '32px',
                      boxShadow: '0 24px 64px rgba(0, 0, 0, 0.25), 0 12px 40px rgba(11, 60, 93, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(20px)',
                      position: 'relative',
                      overflow: 'hidden',
                      maxWidth: '420px',
                      width: '100%',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 32px 80px rgba(0, 0, 0, 0.3), 0 16px 48px rgba(11, 60, 93, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 24px 64px rgba(0, 0, 0, 0.25), 0 12px 40px rgba(11, 60, 93, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                    }}
                  >
                    {/* Decoración de fondo más sutil */}
                    <div style={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      background: 'radial-gradient(circle, rgba(95, 205, 209, 0.08) 0%, transparent 70%)',
                      borderRadius: '50%',
                      zIndex: 0
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: -40,
                      left: -40,
                      width: 140,
                      height: 140,
                      background: 'radial-gradient(circle, rgba(246, 150, 63, 0.08) 0%, transparent 70%)',
                      borderRadius: '50%',
                      zIndex: 0
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <img 
                        src="/logo domus robotOK.png" 
                        alt="Logo Domus Robot" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: '200px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15))',
                          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div 
                  className="quote-box"
                  style={{
                    marginBottom: 40,
                    padding: '28px 32px',
                    background: 'linear-gradient(135deg, rgba(26, 74, 107, 0.95) 0%, rgba(11, 60, 93, 0.98) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    maxWidth: '600px',
                    width: '100%',
                    margin: '0 auto 40px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35), 0 8px 32px rgba(11, 60, 93, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 24px 72px rgba(0, 0, 0, 0.4), 0 12px 40px rgba(11, 60, 93, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.35), 0 8px 32px rgba(11, 60, 93, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {/* Decoración sutil de fondo */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(149, 205, 209, 0.3), transparent)',
                    zIndex: 1
                  }} />
                  <Paragraph 
                    style={{ 
                      fontSize: '1.65rem',
                      lineHeight: 1.5,
                      color: 'white',
                      margin: 0,
                      fontWeight: 600,
                      fontStyle: 'italic',
                      textAlign: 'center',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
                      letterSpacing: '0.5px',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    «Inteligencia natural para tu hogar»
                  </Paragraph>
                </div>
                
                <Paragraph 
                  style={{ 
                    fontSize: '1.375rem',
                    lineHeight: 1.85,
                    color: 'rgba(255, 255, 255, 0.95)',
                    maxWidth: '850px',
                    margin: '0 auto',
                    fontWeight: 400,
                    textAlign: 'center',
                    letterSpacing: '0.2px',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Con Domüs interpretamos la calidad del aire en el hogar de manera contextual y comprensible. Transformamos la información técnica en bienestar cotidiano, ayudando a las personas a respirar mejor, prevenir riesgos y cuidar su salud sin esfuerzo.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24}>
              <Row gutter={[40, 40]} justify="center">
                {features.map((feature, index) => (
                  <Col xs={24} sm={12} lg={10} key={index}>
                    <Card
                      style={{
                        borderRadius: 28,
                        border: `2px solid ${feature.borderColor}20`,
                        boxShadow: `0 16px 48px ${feature.borderColor}15, 0 4px 16px rgba(0,0,0,0.1)`,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        minHeight: 400,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                      bodyStyle={{ 
                        padding: 48,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        zIndex: 1
                      }}
                      hoverable
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                        e.currentTarget.style.boxShadow = `0 24px 64px ${feature.borderColor}30, 0 8px 24px rgba(0,0,0,0.15)`;
                        e.currentTarget.style.borderColor = `${feature.borderColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = `0 16px 48px ${feature.borderColor}15, 0 4px 16px rgba(0,0,0,0.1)`;
                        e.currentTarget.style.borderColor = `${feature.borderColor}20`;
                      }}
                    >
                      {/* Decoración de fondo mejorada */}
                      <div style={{
                        position: 'absolute',
                        top: -40,
                        right: -40,
                        width: 160,
                        height: 160,
                        background: `${feature.bgGradient}`,
                        borderRadius: '50%',
                        zIndex: 0,
                        opacity: 0.6
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        width: 120,
                        height: 120,
                        background: `${feature.bgGradient}`,
                        borderRadius: '50%',
                        zIndex: 0,
                        opacity: 0.4
                      }} />
                      
                      {/* Icono mejorado */}
                      <div style={{
                        width: 96,
                        height: 96,
                        borderRadius: '24px',
                        background: `${feature.gradient}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 32,
                        boxShadow: `0 12px 32px ${feature.borderColor}35, 0 4px 12px rgba(0,0,0,0.15)`,
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}
                      >
                        <div style={{ fontSize: 40, color: 'white' }}>
                          {feature.icon}
                        </div>
                      </div>
                      
                      <Title 
                        level={3} 
                        style={{ 
                          color: feature.titleColor,
                          marginBottom: 24,
                          fontSize: '1.75rem',
                          fontWeight: 800,
                          lineHeight: 1.2,
                          letterSpacing: '-0.5px'
                        }}
                      >
                        {feature.title}
                      </Title>
                      
                      <Paragraph 
                        style={{ 
                          color: '#4B5563',
                          lineHeight: 1.8,
                          marginBottom: 0,
                          flex: 1,
                          fontSize: '17px',
                          fontWeight: 400,
                          letterSpacing: '0.2px'
                        }}
                      >
                        {feature.description}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Call to Action */}
            <Col xs={24}>
              <div style={{ 
                textAlign: 'center', 
                marginTop: 80,
                padding: '64px 48px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                borderRadius: 28,
                border: 'none',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(246, 150, 63, 0.25), 0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(circle at 20% 80%, rgba(246, 150, 63, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(149, 205, 209, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(217, 87, 102, 0.05) 0%, transparent 50%)
                  `,
                  pointerEvents: 'none'
                }} />
                
                {/* Decoraciones adicionales */}
                <div style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: 'linear-gradient(135deg, rgba(246, 150, 63, 0.1), rgba(149, 205, 209, 0.1))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 120,
                  height: 120,
                  background: 'linear-gradient(135deg, rgba(149, 205, 209, 0.1), rgba(217, 87, 102, 0.1))',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <Title level={3} style={{ 
                    color: '#0B3C5D', 
                    marginBottom: 24, 
                    fontWeight: 700,
                    fontSize: '2.25rem',
                    background: 'linear-gradient(135deg, #0B3C5D, #274181)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    ¿Listo para Revolucionar tu Hogar con Domüs?
                  </Title>
                  <Paragraph 
                    style={{ 
                      color: '#4B5563', 
                      fontSize: '1.25rem',
                      marginBottom: 20,
                      maxWidth: 900,
                      margin: '0 auto 20px',
                      fontWeight: 500,
                      lineHeight: 1.7
                    }}
                  >
                    Domüs no solo mide el aire, lo entiende e interpreta para mejorar la vida dentro del hogar.
                  </Paragraph>
                  
                  <Paragraph 
                    style={{ 
                      color: '#4B5563', 
                      fontSize: '1.25rem',
                      marginBottom: 40,
                      maxWidth: 900,
                      margin: '0 auto 40px',
                      fontWeight: 500,
                      lineHeight: 1.7
                    }}
                  >
                    Es tu compañero inteligente que transforma cada día en una experiencia más segura, autónoma y tranquila para ti y tu familia.
                  </Paragraph>
                  
                  <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      href="mailto:info@humanixtech.com?subject=Solicitud de Demo - Domüs&body=Hola humanix-tech,%0D%0A%0D%0AMe interesa solicitar una demo del producto Domüs.%0D%0A%0D%0APor favor, contactenme para coordinar una demostración.%0D%0A%0D%0ASaludos cordiales"
                      style={{
                        background: 'linear-gradient(135deg, #274181, #95CDD1)',
                        borderColor: 'transparent',
                        height: 64,
                        paddingLeft: 40,
                        paddingRight: 40,
                        fontSize: 18,
                        fontWeight: 600,
                        borderRadius: 16,
                        boxShadow: '0 8px 24px rgba(39, 65, 129, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(39, 65, 129, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(39, 65, 129, 0.3)';
                      }}
                    >
                      Solicitar Demo
                    </Button>
                    {/* 
                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      style={{
                        color: '#00C2C7',
                        borderColor: '#00C2C7',
                        backgroundColor: 'transparent',
                        height: 64,
                        paddingLeft: 40,
                        paddingRight: 40,
                        fontSize: 18,
                        fontWeight: 600,
                        borderRadius: 16,
                        borderWidth: '2px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 194, 199, 0.1)';
                        e.target.style.color = '#00C2C7';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 24px rgba(0, 194, 199, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#00C2C7';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Manual de Usuario
                    </Button> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Product;