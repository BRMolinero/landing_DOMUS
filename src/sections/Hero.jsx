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
      text: 'Responsabilidad'
    },
    {
      icon: <StarOutlined style={{ fontSize: 20, color: '#95CDD1' }} />,
      text: 'Seguridad'
    },
    {
      icon: <RocketOutlined style={{ fontSize: 20, color: '#D95766' }} />,
      text: 'Sostenibilidad'
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
      
      <div 
        className="hero-main-container"
        style={{
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '0 24px',
          position: 'relative',
          zIndex: 1
        }}>
        <Row gutter={[64, 64]} align="middle" justify="center">
          <Col xs={24} className="hero-content-column">
            <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 1200 }}>
              <div>
                <Title 
                  level={1} 
                  style={{ 
                    color: 'white', 
                    marginBottom: 80,
                    fontSize: '4rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #ffffff 0%, #00C2C7 50%, #0B3C5D 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    textAlign: 'center'
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
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '6px',
                    background: 'linear-gradient(135deg, #0B3C5D, #00C2C7)',
                    borderRadius: '3px'
                  }} />
                </Title>
                
                <Paragraph 
                  className="hero-description-text"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1.375rem',
                    lineHeight: 1.7,
                    marginBottom: 32,
                    fontWeight: 500,
                    maxWidth: 600,
                    margin: '0 auto 32px',
                    textAlign: 'center'
                  }}
                >
                  Creemos que la tecnología puede ser más que inteligente: puede ser humana.
                </Paragraph>
                
                <Paragraph 
                  className="hero-description-text"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1.375rem',
                    lineHeight: 1.7,
                    marginBottom: 56,
                    fontWeight: 500,
                    maxWidth: 600,
                    margin: '0 auto 56px',
                    textAlign: 'center'
                  }}
                >
                  Creamos herramientas que acompañan, protegen y empoderan a las personas en su día a día.
                </Paragraph>

                {/* Features badges */}
                <div style={{ 
                  display: 'flex', 
                  gap: 16, 
                  marginBottom: 56,
                  flexWrap: 'wrap',
                  justifyContent: 'center'
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

              <div className="hero-buttons-container" style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 16,
                justifyContent: 'center'
              }}>
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => scrollToSection('product')}
                  className="hero-button-primary"
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
                    transition: 'all 0.3s ease',
                    width: 'auto'
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
                  className="hero-button-secondary"
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
                    transition: 'all 0.3s ease',
                    width: 'auto'
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
              </div>
            </Space>
          </Col>
        </Row>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .hero-main-container {
              padding: 0 32px !important;
            }
            
            .hero-content-column {
              display: flex !important;
              justify-content: center !important;
              text-align: center !important;
            }
            
            .hero-card-section {
              display: none !important;
            }
            
            .hero-description-text {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            
            .hero-buttons-container {
              flex-direction: row !important;
              gap: 12px !important;
            }
            
            .hero-button-primary,
            .hero-button-secondary {
              width: calc(50% - 6px) !important;
              height: 48px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
              font-size: 14px !important;
              border-radius: 12px !important;
            }
          }
          
          @media (min-width: 769px) {
            .hero-buttons-container {
              flex-direction: row;
            }
            
            .hero-button-primary,
            .hero-button-secondary {
              width: auto;
            }
          }
        `
      }} />
    </section>
  );
};

export default Hero;