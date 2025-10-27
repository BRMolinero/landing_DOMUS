import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined, RocketOutlined, StarOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const features = [
    {
      icon: <ThunderboltOutlined style={{ fontSize: 20, color: '#F6963F' }} />,
      text: 'Autonomía'
    },
    {
      icon: <StarOutlined style={{ fontSize: 20, color: '#95CDD1' }} />,
      text: 'Seguridad'
    },
    {
      icon: <RocketOutlined style={{ fontSize: 20, color: '#D95766' }} />,
      text: 'Compañía'
    }
  ];

  return (
    <section 
      id="hero"
      style={{ 
        minHeight: '100vh',
        background: '#0B3C5D',
        display: 'flex',
        alignItems: 'center',
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
        background: 'radial-gradient(circle, rgba(0, 194, 199, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-8%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(246, 150, 63, 0.15) 0%, transparent 70%)',
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
        background: 'radial-gradient(circle, rgba(217, 87, 102, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.6
      }} />
      
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '0 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <Row gutter={[64, 64]} align="middle">
          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title 
                  level={1} 
                  style={{ 
                    color: 'white', 
                    marginBottom: 32,
                    fontSize: '4rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #ffffff 0%, #00C2C7 50%, #0B3C5D 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative'
                  }}
                >
                  humanix-tech:{' '}
                  <span style={{ 
                    background: 'linear-gradient(135deg, #00C2C7, #ffffff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Tecnología</span>{' '}
                  con Propósito
                  <div style={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: 0,
                    width: '200px',
                    height: '6px',
                    background: 'linear-gradient(135deg, #0B3C5D, #00C2C7)',
                    borderRadius: '3px'
                  }} />
                </Title>
                
                <Paragraph 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1.375rem',
                    lineHeight: 1.7,
                    marginBottom: 40,
                    fontWeight: 500,
                    maxWidth: 600
                  }}
                >
                  Creemos que la tecnología puede ser más que inteligente: puede ser humana.
                  Creamos herramientas que acompañan, protegen y empoderan a las personas en su día a día.
                </Paragraph>

                {/* Features badges */}
                <div style={{ 
                  display: 'flex', 
                  gap: 16, 
                  marginBottom: 40,
                  flexWrap: 'wrap'
                }}>
                  {features.map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {feature.icon}
                      <span style={{ 
                        color: 'white', 
                        fontSize: '14px', 
                        fontWeight: 500 
                      }}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Space size="large" wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => scrollToSection('product')}
                  style={{
                    height: 64,
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontSize: 18,
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
                    borderColor: 'transparent',
                    borderRadius: 16,
                    boxShadow: '0 8px 24px rgba(0, 194, 199, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 32px rgba(0, 194, 199, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 24px rgba(0, 194, 199, 0.3)';
                  }}
                >
                  Conocer Producto
                </Button>
                
                <Button
                  size="large"
                  /* icon={<PlayCircleOutlined />} */
                  icon={<ArrowRightOutlined />}
                  onClick={() => scrollToSection('contacto')}
                  style={{
                    height: 64,
                    paddingLeft: 40,
                    paddingRight: 40,
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 16,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Contactar Ahora
                </Button>
              </Space>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: 500,
                height: 500,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 24,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
              }}>
                {/* Decoraciones internas */}
                <div style={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  background: 'radial-gradient(circle, rgba(0, 194, 199, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 100,
                  height: 100,
                  background: 'radial-gradient(circle, rgba(246, 150, 63, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }} />

                {/* Contenido principal */}
                <div style={{
                  width: '85%',
                  height: '85%',
                  background: 'linear-gradient(135deg, rgba(149, 205, 209, 0.2), rgba(39, 65, 129, 0.2))',
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative',
                  zIndex: 1,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    boxShadow: '0 8px 24px rgba(0, 194, 199, 0.3)'
                  }}>
                    <RocketOutlined style={{ fontSize: 36, color: 'white' }} />
                  </div>
                  
                  <Title 
                    level={3} 
                    style={{ 
                      color: 'white',
                      marginBottom: 16,
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    Domüs
                  </Title>
                  
                  <Paragraph 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '16px',
                      textAlign: 'center',
                      marginBottom: 0,
                      fontWeight: 500,
                      lineHeight: 1.5
                    }}
                  >
                    Creado para acompañar
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;