import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Typography, Space, Drawer, Modal } from 'antd';
import {
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ContactsOutlined,
  DownloadOutlined,
  MobileOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Hero from '../sections/Hero';
import WhoWeAre from '../sections/WhoWeAre';
import Product from '../sections/Product';
import Contacto from '../sections/Contacto';

const { Header, Content } = Layout;
const { Title } = Typography;

const AppLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleInstallClick = () => {
    setInstallModalOpen(true);
  };

  const handleGoToApp = () => {
    window.location.href = 'https://domus-frontend.onrender.com';
  };

  const menuItems = [
    {
      key: 'hero',
      icon: <HomeOutlined />,
      label: 'Inicio',
      onClick: () => scrollToSection('hero')
    },
    {
      key: 'who-we-are',
      icon: <TeamOutlined />,
      label: 'Quiénes Somos',
      onClick: () => scrollToSection('who-we-are')
    },
    {
      key: 'product',
      icon: <AppstoreOutlined />,
      label: 'Producto',
      onClick: () => scrollToSection('product')
    },
    {
      key: 'contacto',
      icon: <ContactsOutlined />,
      label: 'Contacto',
      onClick: () => scrollToSection('contacto')
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          width: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 194, 199, 0.2)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="navbar-container" style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          position: 'relative'
        }}>
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px 8px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onClick={() => scrollToSection('hero')}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 194, 199, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src="/logo sin fondo (1).png"
              alt="Humanix-tech Logo"
              style={{
                height: 60,
                marginRight: 16,
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
            />
            <Title
              level={4}
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: '1.25rem',
                background: 'linear-gradient(90deg, #0B3C5D 0%, #00C2C7 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                letterSpacing: '-0.5px'
              }}
            >
              <span style={{ color: '#0B3C5D' }}>humanix-</span>
              <span style={{ color: '#00C2C7' }}>tech</span>
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #0B3C5D 0%, #00C2C7 100%)',
                borderRadius: '2px',
                opacity: 0.8
              }} />
            </Title>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }} className="desktop-menu-container">
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                flex: 1,
                minWidth: 0,
                fontSize: '16px',
                fontWeight: '500'
              }}
              theme='light'
            />

            <Button
              icon={<DownloadOutlined style={{ fontSize: 16 }} />}
              onClick={handleInstallClick}
              className="install-button"
              style={{
                minWidth: 140,
                height: 42,
                borderRadius: '12px',
                border: '2px solid #00C2C7',
                color: '#00C2C7',
                fontWeight: 600,
                fontSize: '15px',
                padding: '8px 20px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                marginLeft: '16px',
                background: 'linear-gradient(135deg, rgba(0, 194, 199, 0.08) 0%, rgba(11, 60, 93, 0.05) 100%)',
                boxShadow: '0 2px 8px rgba(0, 194, 199, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 194, 199, 0.15) 0%, rgba(11, 60, 93, 0.1) 100%)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.borderColor = '#0B3C5D';
                e.currentTarget.style.color = '#0B3C5D';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 194, 199, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 194, 199, 0.08) 0%, rgba(11, 60, 93, 0.05) 100%)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = '#00C2C7';
                e.currentTarget.style.color = '#00C2C7';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 194, 199, 0.15)';
              }}
            >
              Instalar
            </Button>

            <Button
              type="primary"
              /* onClick={() => navigate('/login')} */
              onClick={() => window.location.href = 'https://domus-frontend.onrender.com/login'}

              style={{
                minWidth: 120,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
                borderColor: 'transparent',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.3s ease',
                marginLeft: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Acceder
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            style={{
              display: 'none',
              color: '#0B3C5D',
              fontSize: 20,
              width: 48,
              height: 48,
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              marginLeft: '16px'
            }}
            className="mobile-menu-button"
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '8px 0'
          }}>
            <img
              src="/logo sin fondo (1).png"
              alt="Humanix-tech Logo"
              style={{
                height: 40,
                borderRadius: '50%'
              }}
            />
            <span style={{
              fontSize: '16px',
              fontWeight: 500,
              background: 'linear-gradient(90deg, #0B3C5D 0%, #00C2C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              humanix-tech
            </span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={320}
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
        }}
        styles={{
          body: {
            padding: '24px 0'
          }
        }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '16px',
            fontWeight: '500'
          }}
          theme='light'
        />
        <div style={{
          marginTop: 32,
          textAlign: 'center',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'row',
          gap: 8
        }}>
          <Button
            icon={<DownloadOutlined style={{ fontSize: 14 }} />}
            onClick={() => {
              handleInstallClick();
              setMobileMenuOpen(false);
            }}
            className="install-button-mobile"
            style={{
              width: 'calc(50% - 4px)',
              height: 40,
              borderRadius: '8px',
              border: '1.5px solid #00C2C7',
              color: '#00C2C7',
              fontWeight: 600,
              fontSize: '13px',
              padding: '8px 12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              background: 'linear-gradient(135deg, rgba(0, 194, 199, 0.08) 0%, rgba(11, 60, 93, 0.05) 100%)',
              boxShadow: '0 1px 4px rgba(0, 194, 199, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 194, 199, 0.15) 0%, rgba(11, 60, 93, 0.1) 100%)';
              e.currentTarget.style.borderColor = '#0B3C5D';
              e.currentTarget.style.color = '#0B3C5D';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 194, 199, 0.3)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 194, 199, 0.08) 0%, rgba(11, 60, 93, 0.05) 100%)';
              e.currentTarget.style.borderColor = '#00C2C7';
              e.currentTarget.style.color = '#00C2C7';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 194, 199, 0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Instalar
          </Button>

          <Button
            type="primary"
            /* onClick={() => navigate('/login')} */
            onClick={() => {
              window.location.href = 'https://domus-frontend.onrender.com/login';
              setMobileMenuOpen(false);
            }}
            style={{
              width: 'calc(50% - 4px)',
              height: 40,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
              borderColor: 'transparent',
              fontWeight: 600,
              fontSize: '13px',
              padding: '8px 12px'
            }}
          >
            Acceder
          </Button>
        </div>
      </Drawer>

      <Content style={{ marginTop: 64 }}>
        <Hero />
        <WhoWeAre />
        <Product />
        <Contacto />
        <Footer />
      </Content>

      <WhatsAppButton />

      {/* Modal de Instalación */}
      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <DownloadOutlined style={{ fontSize: 24, color: '#00C2C7' }} />
            <span style={{ fontSize: 20, fontWeight: 600 }}>Instalar Domüs</span>
          </div>
        }
        open={installModalOpen}
        onCancel={() => setInstallModalOpen(false)}
        footer={null}
        width={600}
        style={{ top: 50 }}
      >
        <div style={{ padding: '8px 0' }}>
          {/* Mensaje de advertencia importante */}
          <div style={{
            marginBottom: 24,
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(11, 60, 93, 0.1) 0%, rgba(0, 194, 199, 0.1) 100%)',
            borderRadius: '12px',
            border: '2px solid rgba(0, 194, 199, 0.3)',
            boxShadow: '0 2px 8px rgba(0, 194, 199, 0.15)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              marginBottom: 12
            }}>
              <span style={{
                fontSize: 24,
                color: '#0B3C5D',
                fontWeight: 'bold'
              }}>⚠️</span>
              <div style={{ flex: 1 }}>
                <strong style={{ 
                  fontSize: 16, 
                  color: '#0B3C5D',
                  display: 'block',
                  marginBottom: 8
                }}>
                  Paso 1
                </strong>
                <div style={{ 
                  fontSize: 14, 
                  color: '#4B5563',
                  marginBottom: 16,
                  lineHeight: 1.6
                }}>
                  Antes de instalar, necesitas acceder a la aplicación. Presiona el botón <strong>"Acceder"</strong> en el menú superior o usa el siguiente enlace:
                </div>
                <Button
                  type="primary"
                  onClick={() => {
                    window.location.href = 'https://domus-frontend.onrender.com/login';
                    setInstallModalOpen(false);
                  }}
                  style={{
                    width: '100%',
                    height: 42,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
                    borderColor: 'transparent',
                    fontWeight: 600,
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 194, 199, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 194, 199, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 194, 199, 0.3)';
                  }}
                >
                  Acceder a la aplicación
                </Button>
              </div>
            </div>
          </div>

          {/* Instrucciones de instalación */}
          <div style={{
            padding: '16px',
            background: 'rgba(0, 194, 199, 0.03)',
            borderRadius: '12px',
            marginBottom: 16
          }}>
            <strong style={{ 
              fontSize: 16, 
              color: '#0B3C5D',
              display: 'block',
              marginBottom: 16
            }}>
              Paso 2: según corresponda realiza lo siguiente
            </strong>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12, 
              marginBottom: 16,
              padding: '12px 16px',
              background: 'rgba(0, 194, 199, 0.05)',
              borderRadius: '8px'
            }}>
              <MobileOutlined style={{ fontSize: 20, color: '#00C2C7' }} />
              <div>
                <strong style={{ fontSize: 16, color: '#0B3C5D' }}>En Móvil (Android)</strong>
                <div style={{ fontSize: 14, color: '#4B5563', marginTop: 4 }}>
                  Abre el menú del navegador → <strong>"Agregar a la pantalla de inicio"</strong> o <strong>"Instalar app"</strong>
                </div>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              padding: '12px 16px',
              background: 'rgba(0, 194, 199, 0.05)',
              borderRadius: '8px'
            }}>
              <MobileOutlined style={{ fontSize: 20, color: '#00C2C7' }} />
              <div>
                <strong style={{ fontSize: 16, color: '#0B3C5D' }}>En iPhone/iPad (Safari)</strong>
                <div style={{ fontSize: 14, color: '#4B5563', marginTop: 4 }}>
                  Toca el botón <strong>Compartir</strong> → <strong>"Agregar a pantalla de inicio"</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Modal>

      {/* Custom CSS for enhanced navbar styles */}
      <style jsx>{`
        .ant-menu-horizontal {
          border-bottom: none !important;
        }
        
        .ant-menu-horizontal .ant-menu-item {
          border-bottom: none !important;
          margin: 0 8px !important;
          padding: 8px 16px !important;
          border-radius: 8px !important;
          transition: all 0.3s ease !important;
          color: #4B5563 !important;
          font-weight: 500 !important;
        }
        
        .ant-menu-horizontal .ant-menu-item:hover {
          background: rgba(0, 194, 199, 0.05) !important;
          color: #0B3C5D !important;
          transform: translateY(-1px) !important;
        }
        
        .ant-menu-horizontal .ant-menu-item-selected {
          background: rgba(0, 194, 199, 0.08) !important;
          color: #0B3C5D !important;
          font-weight: 600 !important;
        }
        
        .ant-menu-horizontal .ant-menu-item-selected::after {
          display: none !important;
        }
        
        .ant-menu-vertical .ant-menu-item {
          margin: 4px 0 !important;
          padding: 12px 20px !important;
          border-radius: 8px !important;
          transition: all 0.3s ease !important;
          color: #4B5563 !important;
          font-weight: 500 !important;
        }
        
        .ant-menu-vertical .ant-menu-item:hover {
          background: rgba(0, 194, 199, 0.05) !important;
          color: #0B3C5D !important;
          transform: translateX(4px) !important;
        }
        
        .ant-menu-vertical .ant-menu-item-selected {
          background: rgba(0, 194, 199, 0.08) !important;
          color: #0B3C5D !important;
          font-weight: 600 !important;
        }
        
        .ant-menu-vertical .ant-menu-item-selected::after {
          display: none !important;
        }
        
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 8px !important;
          }
          
          .navbar-container img {
            height: 45px !important;
            margin-right: 10px !important;
          }
          
          .navbar-container .ant-typography {
            font-size: 1rem !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
            width: 40px !important;
            height: 40px !important;
            margin-left: 8px !important;
          }
          
          .ant-menu-horizontal {
            display: none !important;
          }
          
          .desktop-menu-container {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
        }
        
        /* Estilos mejorados para el botón Instalar */
        .install-button {
          position: relative;
          overflow: hidden;
        }
        
        .install-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .install-button:hover::before {
          left: 100%;
        }
        
        .install-button .anticon {
          transition: transform 0.3s ease;
        }
        
        .install-button:hover .anticon {
          transform: translateY(-2px) scale(1.1);
        }
        
        .install-button-mobile {
          position: relative;
          overflow: hidden;
        }
        
        .install-button-mobile::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .install-button-mobile:hover::before {
          left: 100%;
        }
        
        .install-button-mobile:active {
          transform: scale(0.98);
        }
        
        .install-button:active {
          transform: translateY(0) scale(0.98) !important;
        }
      `}</style>
    </Layout>
  );
};

export default AppLayout;
