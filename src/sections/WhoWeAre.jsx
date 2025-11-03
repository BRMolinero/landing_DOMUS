import React from 'react';
import { Row, Col, Typography, Card, Space } from 'antd';
import { 
  AimOutlined, 
  HeartOutlined, 
  BulbOutlined,
  SafetyOutlined, 
  ThunderboltOutlined, 
  TeamOutlined,
  CrownOutlined,
  LockOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const WhoWeAre = () => {

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Autonomía',
      description: 'Dar independencia real al usuario.',
      color: '#D95766',
      gradient: 'linear-gradient(135deg, #D95766, #E57373)'
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Seguridad',
      description: 'Evitar accidentes, pedir ayuda en emergencias.',
      color: '#0B3C5D',
      gradient: 'linear-gradient(135deg, #0B3C5D, #1565C0)'
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Cercanía',
      description: 'Diseño amigable, cálido y humano.',
      color: '#F6963F',
      gradient: 'linear-gradient(135deg, #F6963F, #FFB74D)'
    },
    {
      icon: <TeamOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Accesibilidad',
      description: 'APP adaptable, uso intuitivo, sin barreras.',
      color: '#00C2C7',
      gradient: 'linear-gradient(135deg, #00C2C7, #4DD0E1)'
    },
    {
      icon: <CrownOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Confianza',
      description: 'Tranquilidad para usuarios y familiares.',
      color: '#1E88E5',
      gradient: 'linear-gradient(135deg, #1E88E5, #42A5F5)'
    },
    {
      icon: <LockOutlined style={{ fontSize: 32, color: 'white' }} />,
      title: 'Innovación',
      description: 'Tecnología empática al servicio de las personas.',
      color: '#95CDD1',
      gradient: 'linear-gradient(135deg, #95CDD1, #B2DFDB)'
    }
  ];

  return (
    <section 
      id="who-we-are"
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
        {/* Header Section */}
        <Row gutter={[48, 48]} style={{ marginBottom: 80 }}>
          <Col xs={24}>
            <div style={{ textAlign: 'center' }}>
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
                Quiénes Somos
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
              
              <Paragraph 
                style={{ 
                  fontSize: '1.375rem',
                  lineHeight: 1.7,
                  color: '#4B5563',
                  maxWidth: 900,
                  margin: '0 auto',
                  fontWeight: 500
                }}
              >
                En humanix-tech creamos tecnología asistiva que acompaña, protege y empodera 
                a las personas en su vida cotidiana.
              </Paragraph>
            </div>
          </Col>
        </Row>

        {/* Mission & Vision Section */}
        <Row gutter={[40, 40]} style={{ marginBottom: 100 }}>
          {/* Mission Card */}
          <Col xs={24} md={12}>
            <Card
              style={{
                borderRadius: 24,
                border: 'none',
                boxShadow: '0 12px 40px rgba(39, 65, 129, 0.15)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                height: '100%',
                transition: 'all 0.4s ease',
                overflow: 'hidden',
                position: 'relative'
              }}
              bodyStyle={{ padding: 40 }}
              hoverable
            >
              {/* Decoración de la card */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                background: 'linear-gradient(135deg, rgba(39, 65, 129, 0.1), rgba(149, 205, 209, 0.1))',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              <div aria-labelledby="mission-title" style={{ position: 'relative', zIndex: 1 }}>
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
                  <AimOutlined style={{ fontSize: 28, color: 'white' }} />
                </div>

                <Title 
                  id="mission-title"
                  level={2} 
                  style={{ 
                    color: '#274181',
                    marginBottom: 20,
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1
                  }}
                >
                  Misión
                </Title>
                
                <Paragraph 
                  style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#4B5563',
                    marginBottom: 32,
                    lineHeight: 1.7
                  }}
                >
                  Creemos que la tecnología puede ser mucho más que funcional: puede ser empática, cálida y humana. Por eso creamos soluciones que acompañan, protegen y empoderan a las personas, brindándoles independencia y tranquilidad a sus familias.
                </Paragraph>

                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(246, 150, 63, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(246, 150, 63, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#F6963F', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Tecnología empática y cálida
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(246, 150, 63, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(246, 150, 63, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#F6963F', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Soluciones que empoderan
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(246, 150, 63, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(246, 150, 63, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#F6963F', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Independencia y tranquilidad familiar
                  </li>
                </ul>
              </div>
            </Card>
          </Col>

          {/* Vision Card */}
          <Col xs={24} md={12}>
            <Card
              style={{
                borderRadius: 24,
                border: 'none',
                boxShadow: '0 12px 40px rgba(39, 65, 129, 0.15)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                height: '100%',
                transition: 'all 0.4s ease',
                overflow: 'hidden',
                position: 'relative'
              }}
              bodyStyle={{ padding: 40 }}
              hoverable
            >
              {/* Decoración de la card */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                background: 'linear-gradient(135deg, rgba(149, 205, 209, 0.1), rgba(39, 65, 129, 0.1))',
                borderRadius: '50%',
                zIndex: 0
              }} />
              
              <div aria-labelledby="vision-title" style={{ position: 'relative', zIndex: 1 }}>
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
                  <BulbOutlined style={{ fontSize: 28, color: 'white' }} />
                </div>

                <Title 
                  id="vision-title"
                  level={2} 
                  style={{ 
                    color: '#274181',
                    marginBottom: 20,
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1
                  }}
                >
                  Visión
                </Title>
                
                <Paragraph 
                  style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: '#4B5563',
                    marginBottom: 32,
                    lineHeight: 1.7
                  }}
                >
                  Soñamos con un futuro donde la innovación esté al servicio del cuidado, y donde cada avance tecnológico acerque más a las personas a una vida plena, segura y autónoma.
                </Paragraph>

                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(149, 205, 209, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(149, 205, 209, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#95CDD1', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Innovación al servicio del cuidado
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(149, 205, 209, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(149, 205, 209, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#95CDD1', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Vida plena y segura
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#4B5563',
                    lineHeight: 1.5,
                    padding: '12px 16px',
                    background: 'rgba(149, 205, 209, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(149, 205, 209, 0.2)'
                  }}>
                    <span style={{ 
                      color: '#95CDD1', 
                      marginRight: '16px',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>•</span>
                    Autonomía tecnológica
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Values Section */}
        <Row gutter={[48, 48]}>
          <Col xs={24}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <Title 
                level={2} 
                style={{ 
                  color: '#0B3C5D',
                  marginBottom: 24,
                  fontSize: '3rem',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #0B3C5D, #274181)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative'
                }}
              >
                Nuestros Valores
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #F6963F, #D95766)',
                  borderRadius: '2px'
                }} />
              </Title>
              
              <Paragraph 
                style={{ 
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  color: '#4B5563',
                  maxWidth: 700,
                  margin: '0 auto',
                  fontWeight: 500
                }}
              >
                Cada valor que practicamos en humanix-tech refleja nuestro compromiso genuino 
                con el bienestar humano.
              </Paragraph>
            </div>
          </Col>

          <Col xs={24}>
            <Row gutter={[32, 32]}>
              {values.map((value, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Card
                    style={{
                      borderRadius: 20,
                      border: 'none',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s ease',
                      height: '100%',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                    bodyStyle={{ 
                      padding: 32,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1
                    }}
                    hoverable
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    }}
                  >
                    {/* Decoración de fondo */}
                    <div style={{
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 100,
                      height: 100,
                      background: `${value.gradient}`,
                      opacity: 0.1,
                      borderRadius: '50%',
                      zIndex: 0
                    }} />
                    
                    <div>
                      <div style={{ 
                        marginBottom: 24,
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <div style={{
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          background: `${value.gradient}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 24px ${value.color}40`,
                          position: 'relative',
                          zIndex: 1
                        }}>
                          {value.icon}
                        </div>
                      </div>
                      
                      <Title 
                        level={4} 
                        style={{ 
                          color: value.color,
                          marginBottom: 16,
                          fontSize: '1.5rem',
                          fontWeight: 700
                        }}
                      >
                        {value.title}
                      </Title>
                      
                      <Paragraph 
                        style={{ 
                          color: '#4B5563',
                          lineHeight: 1.6,
                          marginBottom: 0,
                          fontSize: '16px',
                          fontWeight: 500
                        }}
                      >
                        {value.description}
                      </Paragraph>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Values Summary */}
        <Row style={{ marginTop: 80 }}>
          <Col xs={24}>
            <div 
              className="values-summary-card"
              style={{
                background: 'linear-gradient(135deg, #0B3C5D 0%, #274181 50%, #95CDD1 100%)',
                borderRadius: 24,
                padding: 64,
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(11, 60, 93, 0.3)'
              }}
            >
              {/* Decoraciones de fondo */}
              <div style={{
                position: 'absolute',
                top: -50,
                left: -50,
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
              }} />
              <div style={{
                position: 'absolute',
                bottom: -30,
                right: -30,
                width: 150,
                height: 150,
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                borderRadius: '50%'
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Title 
                  level={2} 
                  className="values-title"
                  style={{ 
                    color: 'white', 
                    marginBottom: 24,
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1
                  }}
                >
                  "Valores que Transforman"
                </Title>
                <Paragraph 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: '1.375rem',
                    lineHeight: 1.7,
                    marginBottom: 0,
                    maxWidth: 900,
                    margin: '0 auto',
                    fontWeight: 500
                  }}
                >
                  Transformamos la innovación en compañía, brindando autonomía, seguridad y tranquilidad 
                  a quienes más lo necesitan —y a quienes los rodean. Porque nuestro propósito es simple: 
                  que la tecnología esté al servicio de las personas, y no al revés.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      
      <style>{`
        /* Estilos para móvil - reducir tamaño de fuente y márgenes */
        @media (max-width: 768px) {
          .values-summary-card {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          
          .values-title {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .values-summary-card {
            padding: 20px 12px !important;
            border-radius: 12px !important;
          }
          
          .values-title {
            font-size: 1.25rem !important;
            line-height: 1.2 !important;
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;