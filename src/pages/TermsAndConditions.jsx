import React, { useEffect } from 'react';
import { Layout, Typography, Button, Row, Col, Tooltip } from 'antd';
import { ArrowLeftOutlined, FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          zIndex: 1000, 
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer' 
            }}
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo sin fondo (1).png" 
              alt="Humanix-tech Logo" 
              style={{ height: 60, marginRight: 12, borderRadius: '50%' }}
            />
            <Title 
              level={4} 
              style={{ 
                margin: 0, 
                fontWeight: 600,
                position: 'relative'
              }}
            >
              <span style={{ color: '#0B3C5D' }}>humanix-</span>
              <span style={{ color: '#00C2C7' }}>tech</span>
              <div style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #0B3C5D 0%, #00C2C7 100%)',
                borderRadius: '1px'
              }} />
            </Title>
          </div>
        </div>
      </Header>

      <Content style={{ 
        marginTop: 64, 
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0B3C5D 0%, #00C2C7 100%)',
        minHeight: 'calc(100vh - 64px)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            padding: 48, 
            borderRadius: 20, 
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Row style={{ alignItems: 'center', marginBottom: 32 }}>
              <Col flex="none">
                <Tooltip title="Volver al inicio" placement="bottom">
                  <Button
                    type="text"
                    icon={<ArrowLeftOutlined style={{ fontSize: 20 }} />}
                    onClick={() => navigate('/')}
                    style={{ 
                      color: '#0B3C5D',
                      fontSize: 20,
                      fontWeight: 500,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  />
                </Tooltip>
              </Col>
              <Col flex="auto">
                <Title level={1} style={{ color: '#0B3C5D', margin: 0, textAlign: 'center', fontSize: '2.2rem' }}>
                  <FileTextOutlined style={{ marginRight: 16, color: '#00C2C7' }} />
                  Términos y Condiciones
                </Title>
              </Col>
              <Col flex="none" style={{ width: 120 }}></Col>
            </Row>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              <strong style={{ color: '#0B3C5D' }}>Última actualización:</strong> Septiembre 2025
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              1. Información General
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Estos términos y condiciones regulan el uso del sitio web de humanix-tech y los servicios 
              relacionados con nuestro producto Domüs. Al acceder y utilizar nuestros servicios, usted 
              acepta estar sujeto a estos términos.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              2. Descripción del Servicio
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              humanix-tech desarrolla y comercializa Domüs, un robot asistente integral diseñado para mejorar 
              la autonomía, seguridad y calidad de vida de personas con movilidad reducida, visión reducida 
              y adultos mayores. Incluye funciones de detección de objetos perdidos, monitoreo del clima 
              y detección de gases tóxicos.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              3. Contacto
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Para cualquier consulta sobre estos términos y condiciones, puede contactarnos en:
              <br />
              <strong style={{ color: '#0B3C5D' }}>Email:</strong> info@humanixtech.com
              <br />
              <strong style={{ color: '#0B3C5D' }}>Teléfono:</strong> +5493534128030
              <br />
              <strong style={{ color: '#0B3C5D' }}>Dirección:</strong> Corrientes 1098, Villa Maria, Córdoba
            </Paragraph>
          </div>
        </div>
      </Content>
      <Footer />
      <WhatsAppButton />
    </Layout>
  );
};

export default TermsAndConditions;