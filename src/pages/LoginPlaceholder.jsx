import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPlaceholder = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0B3C5D 0%, #00C2C7 100%)'
    }}>
      <Result
        status="info"
        title="Área de Acceso"
        subTitle="Esta sección será implementada próximamente con el sistema de autenticación completo."
        extra={
          <Button 
            type="primary" 
            size="large"
            onClick={() => navigate('/')}
            style={{ minWidth: 120 }}
          >
            Volver al Inicio
          </Button>
        }
      />
    </div>
  );
};

export default LoginPlaceholder;
