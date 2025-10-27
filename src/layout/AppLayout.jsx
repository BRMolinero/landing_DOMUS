import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Typography, Space, Drawer } from 'antd';
import { 
  MenuOutlined, 
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ContactsOutlined
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
        <div style={{ 
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
              type="primary"
              onClick={() => navigate('/login')}
              style={{ 
                minWidth: 120,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
                borderColor: 'transparent',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.3s ease',
                marginLeft: '16px'
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
          padding: '0 24px'
        }}>
          <Button
            type="primary"
            onClick={() => navigate('/login')}
            style={{ 
              width: '100%',
              height: 48,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00C2C7, #0B3C5D)',
              borderColor: 'transparent',
              fontWeight: 600,
              fontSize: '16px'
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
          .mobile-menu-button {
            display: flex !important;
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
      `}</style>
    </Layout>
  );
};

export default AppLayout;
