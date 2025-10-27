import React from 'react';
import { Modal, Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const LegalModal = ({ isOpen, onClose, type }) => {
  const isTerms = type === 'terms';

  const termsContent = (
    <div>
      <Title level={3}>Términos y Condiciones</Title>
      <Paragraph>
        Bienvenido a humanix-tech. Estos términos y condiciones rigen el uso de nuestro sitio web y servicios relacionados con Domüs.
      </Paragraph>
      
      <Title level={4}>1. Aceptación de los Términos</Title>
      <Paragraph>
        Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso.
      </Paragraph>
      
      <Title level={4}>2. Uso del Sitio</Title>
      <Paragraph>
        Este sitio web está destinado únicamente para fines informativos sobre Domüs y nuestros servicios. No se permite el uso comercial sin autorización previa.
      </Paragraph>
      
      <Title level={4}>3. Propiedad Intelectual</Title>
      <Paragraph>
        Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes, es propiedad de humanix-tech.
      </Paragraph>
      
      <Title level={4}>4. Limitación de Responsabilidad</Title>
      <Paragraph>
        humanix-tech no será responsable por daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso de este sitio o de Domüs.
      </Paragraph>
      
      <Title level={4}>5. Modificaciones</Title>
      <Paragraph>
        Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.
      </Paragraph>
    </div>
  );

  const privacyContent = (
    <div>
      <Title level={3}>Política de Privacidad</Title>
      <Paragraph>
        En humanix-tech, respetamos su privacidad y nos comprometemos a proteger su información personal relacionada con Domüs.
      </Paragraph>
      
      <Title level={4}>1. Información que Recopilamos</Title>
      <Paragraph>
        Recopilamos información que usted nos proporciona voluntariamente, como nombre, correo electrónico y datos de contacto relacionados con Domüs.
      </Paragraph>
      
      <Title level={4}>2. Uso de la Información</Title>
      <Paragraph>
        Utilizamos su información para responder a sus consultas sobre Domüs, mejorar nuestros servicios y comunicarnos con usted sobre el producto.
      </Paragraph>
      
      <Title level={4}>3. Compartir Información</Title>
      <Paragraph>
        No vendemos, alquilamos ni compartimos su información personal con terceros sin su consentimiento explícito.
      </Paragraph>
      
      <Title level={4}>4. Seguridad</Title>
      <Paragraph>
        Implementamos medidas de seguridad apropiadas para proteger su información contra acceso no autorizado, especialmente considerando la naturaleza sensible de los datos de Domüs.
      </Paragraph>
      
      <Title level={4}>5. Cookies</Title>
      <Paragraph>
        Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede desactivar las cookies en su navegador.
      </Paragraph>
      
      <Title level={4}>6. Sus Derechos</Title>
      <Paragraph>
        Tiene derecho a acceder, rectificar, eliminar o portar sus datos personales relacionados con Domüs. Para ejercer estos derechos, contáctenos.
      </Paragraph>
    </div>
  );

  return (
    <Modal
      title={isTerms ? "Términos y Condiciones" : "Política de Privacidad"}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      style={{ top: 20 }}
    >
      {isTerms ? termsContent : privacyContent}
    </Modal>
  );
};

export default LegalModal;
