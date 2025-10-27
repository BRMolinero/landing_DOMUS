import React from 'react';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsAppButton = () => {
  const whatsappNumber = '5493534128030'; // Updated phone number
  const message = encodeURIComponent('Hola humanix-tech, me interesa conocer más sobre sus soluciones tecnológicas.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      icon={<WhatsAppOutlined />}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#128C7E';
        e.target.style.borderColor = '#128C7E';
        e.target.style.transform = 'scale(1.1)';
        e.target.style.transition = 'all 0.3s ease';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#25D366';
        e.target.style.borderColor = '#25D366';
        e.target.style.transform = 'scale(1)';
      }}
    />
  );
};

export default WhatsAppButton;
