import React from 'react';
import { Row, Col, Typography, Space, Button, Divider } from 'antd';
import { 
  LinkedinOutlined, 
  YoutubeOutlined, 
  InstagramOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;


const Footer = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: 20, color: '#0B3C5D' }} />,
      title: 'Email',
      content: 'info@humanixtech.com'
    },
    {
      icon: <PhoneOutlined style={{ fontSize: 20, color: '#0B3C5D' }} />,
      title: 'Teléfono',
      content: '+5493534128030'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: 20, color: '#0B3C5D' }} />,
      title: 'Oficina',
      content: 'Corrientes 1098, Villa Maria, Córdoba'
    }
  ];

  return (
    <>
      <footer style={{ 
        backgroundColor: '#FFFFFF', 
        color: '#0B3C5D', 
        padding: '48px 0 24px',
        marginTop: 'auto',
        borderTop: '1px solid #E5E7EB'
      }} className="footer-main">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Row gutter={[32, 32]}>
            {/* Brand Column */}
            <Col xs={24} md={6} className="footer-logo-col">
              <div style={{ marginBottom: 16, textAlign: 'center' }} className="footer-logo-wrapper">
                <img 
                  src="/logo.png" 
                  alt="Humanix-tech Logo" 
                  style={{ height: 200, marginBottom: 16, borderRadius: '50%' }}
                  className="footer-logo-img"
                />
              </div>
            </Col>

            {/* Contact Information Column */}
            <Col xs={24} md={6} className="footer-contact-col">
              <Title level={5} style={{ color: '#0B3C5D', marginBottom: 16 }} className="footer-contact-title">
                Contacto
              </Title>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {info.icon}
                    <div>
                      <Text style={{ color: '#4B5563', fontSize: 14, display: 'block' }}>
                        {info.title}
                      </Text>
                      <Text style={{ color: '#0B3C5D', fontSize: 14 }}>
                        {info.title === 'Email' ? (
                          <a 
                            href={`mailto:${info.content}`}
                            style={{ 
                              color: '#0B3C5D',
                              textDecoration: 'underline',
                              transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00C2C7'}
                            onMouseLeave={(e) => e.target.style.color = '#0B3C5D'}
                          >
                            {info.content}
                          </a>
                        ) : info.title === 'Teléfono' ? (
                          <a 
                            href="https://wa.me/5493534128030?text=Hola humanix-tech, me interesa conocer más sobre sus soluciones tecnológicas."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#0B3C5D',
                              textDecoration: 'underline',
                              transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00C2C7'}
                            onMouseLeave={(e) => e.target.style.color = '#0B3C5D'}
                          >
                            {info.content}
                          </a>
                        ) : info.title === 'Oficina' ? (
                          <a 
                            href="https://maps.google.com/?q=Corrientes+1098,+Villa+Maria,+Córdoba"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#0B3C5D',
                              textDecoration: 'underline',
                              transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00C2C7'}
                            onMouseLeave={(e) => e.target.style.color = '#0B3C5D'}
                          >
                            {info.content}
                          </a>
                        ) : (
                          info.content
                        )}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>
            </Col>

            {/* Legal Column */}
            <Col xs={24} md={6}>
              <Title level={5} style={{ color: '#0B3C5D', marginBottom: 16 }}>
                Información Legal
              </Title>
              <Space direction="vertical" size="small">
                <Button 
                  type="link" 
                  style={{ color: '#4B5563', padding: 0, height: 'auto' }}
                  onClick={() => navigate('/terms')}
                >
                  Términos y Condiciones
                </Button>
                <Button 
                  type="link" 
                  style={{ color: '#4B5563', padding: 0, height: 'auto' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/privacy');
                  }}
                >
                  Política de Privacidad
                </Button>
              </Space>
            </Col>

            {/* Social Media Column */}
            <Col xs={24} md={6}>
              <Title level={5} style={{ color: '#0B3C5D', marginBottom: 16 }}>
                Síguenos
              </Title>
              <Space size="large">
                <Button
                  type="text"
                  icon={<LinkedinOutlined />}
                  size="large"
                  style={{ color: '#4B5563', cursor: 'default' }}
                />
                <Button
                  type="text"
                  icon={<InstagramOutlined />}
                  size="large"
                  href="https://www.instagram.com/domusxhumanix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  style={{ color: '#4B5563' }}
                />
                <Button
                  type="text"
                  icon={<YoutubeOutlined />}
                  size="large"
                  href="https://www.youtube.com/channel/UC_2HmvmUtcuCeEOH1KfR8qg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en YouTube"
                  style={{ color: '#4B5563' }}
                />
              </Space>
            </Col>
          </Row>

          <Divider style={{ borderColor: '#E5E7EB', margin: '32px 0 24px' }} />
          
          <Row justify="center">
            <Col>
              <Text style={{ color: '#6B7280', textAlign: 'center' }}>
                © 2025 humanix-tech. Todos los derechos reservados.
              </Text>
            </Col>
          </Row>
        </div>
        
        <style>{`
          /* Reducir espacio entre logo y título Contacto en móvil */
          @media (max-width: 768px) {
            .footer-main {
              padding-top: 24px !important;
            }
            
            .footer-logo-wrapper {
              margin-bottom: 0px !important;
              margin-top: 0 !important;
            }
            
            .footer-logo-img {
              margin-bottom: 0px !important;
            }
            
            .footer-logo-col {
              margin-bottom: 0px !important;
              margin-top: 0 !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            
            .footer-contact-col {
              margin-top: 0 !important;
              padding-top: 0 !important;
            }
            
            .footer-contact-title {
              margin-top: 0 !important;
              margin-bottom: 12px !important;
            }
            
            /* Reducir el gutter del Row en móvil */
            .ant-row.ant-row-gutter-32 {
              row-gap: 4px !important;
            }
            
            /* Reducir el padding vertical de las columnas */
            .footer-logo-col .ant-col,
            .footer-contact-col .ant-col {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
          }
          
          /* Reducir espacio también en desktop */
          @media (min-width: 769px) {
            .footer-logo-col {
              margin-bottom: 0px !important;
            }
            
            .footer-logo-wrapper {
              margin-bottom: 0px !important;
            }
            
            .footer-logo-img {
              margin-bottom: 0px !important;
            }
            
            .ant-row.ant-row-gutter-32 {
              row-gap: 16px !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;