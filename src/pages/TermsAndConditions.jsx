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
              <strong style={{ color: '#0B3C5D' }}>Última actualización:</strong> Octubre 2025
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              Los siguientes términos y condiciones (los "Términos y Condiciones") rigen el funcionamiento y uso de esta plataforma (la "Plataforma"), de propiedad de humanix-tech.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              La Plataforma incluye el sitio web de humanix-tech, y los productos y servicios que se ofrecen a través de dicho sitio, incluyendo Domüs y sus respectivos sitios web y aplicaciones móviles (Apps), incluyendo aplicaciones web progresivas (PWA).
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              Usted debe leer atentamente estos Términos y Condiciones antes de utilizar la Plataforma. El acceso y utilización de la Plataforma le atribuyen la condición de usuario, lo cual implica la adhesión a las presentes Términos y Condiciones en la versión publicada en el momento en que se acceda a la misma. El solo uso de la Plataforma implica la aceptación de todas y cada una de las condiciones generales y particulares incluidas en estos Términos y Condiciones.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              Su lectura le permitirá ejercer en mejor forma sus derechos. Si Usted no estuviera de acuerdo con los Términos y Condiciones que rigen el uso de esta Plataforma, Usted no deberá acceder ni hacer uso de ella ni de los servicios y productos que se prestan y ofrecen a través de ella. Al acceder a la Plataforma, se asumirá en forma automática que Usted es mayor de 18 años de edad y tiene capacidad para comprender y aceptar estos Términos y Condiciones.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              Estos Términos y Condiciones pueden ser modificados o actualizados de manera periódica, en cuyo caso se dejará constancia de la fecha de la última revisión. El acceso y uso de la Plataforma evidenciarán su aceptación de dichas modificaciones o actualizaciones.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              1. DESCRIPCIÓN DEL SERVICIO
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La Plataforma consiste en un sistema de gestión y asistencia integrado mediante un robot asistente (Domüs) que incluye operaciones de monitoreo ambiental, detección de gases tóxicos, y funciones de asistencia dirigidas a personas con movilidad reducida, visión reducida y adultos mayores. Asimismo, proporciona a los usuarios acceso a través de aplicaciones web progresivas (PWA), aplicaciones móviles y tableros de control que se basan en indicadores clave de monitoreo ambiental y seguridad, para medir la evolución y actividad del sistema. La Plataforma se utiliza también a través de nuestro sitio web, de nuestras aplicaciones móviles, aplicaciones web progresivas y de la utilización de los productos y servicios que Usted pudiera contratar.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              2. CUENTAS DE USUARIO
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Para utilizar cualquiera de los productos o servicios ofrecidos a través de la Plataforma, deberá registrarse para obtener una cuenta. Durante el registro, requerimos que nos proporcione ciertos datos personales, que serán tratados en los términos y condiciones previstos en la Política de Privacidad de humanix-tech. Usted podrá acceder a la Política de Privacidad de humanix-tech, que rige el tratamiento de los datos personales, a través de la Plataforma. Usted es totalmente responsable de la confidencialidad de su contraseña y de su cuenta. Será totalmente responsable del uso de su cuenta, incluido el uso no autorizado de su cuenta por terceros.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              3. LICENCIA LIMITADA Y USO DE LA PLATAFORMA
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Al utilizar y/o descargar cualquiera de los productos, servicios, software o aplicaciones de la Plataforma, humanix-tech le otorga una licencia de uso limitada y no exclusiva para instalar y utilizar el software o aplicación de propiedad de humanix-tech.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              El acceso o uso a los productos, servicios o aplicaciones de la Plataforma no le permite su venta, alquiler, comercialización, la realización de ingeniería inversa ni intentar copiar de otro modo dichos productos, servicios o aplicaciones ni ningún otro uso que humanix-tech no le haya autorizado expresamente. El software y la aplicación de humanix-tech constituyen una propiedad intelectual de humanix-tech y su utilización y/o descarga no le confieren ningún derecho sobre ellos ni implican cesión de derecho alguno.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Al utilizar la Plataforma, Usted acepta y se obliga a utilizar la Plataforma únicamente dentro de los fines previstos en la licencia de uso limitada y no exclusiva otorgada por humanix-tech, incluyendo, pero no limitándose a (i) proporcionar contenido e información veraz y precisa; (ii) no transmitir ningún software malicioso o no solicitado, ni apoderarse de información de terceros ni enviar información no solicitada (spam) a terceros, usuarios o no; (iii) no realizar actos que puedan resultar ilegales, abusivos, perjudiciales u ofensivos a humanix-tech y/o terceros; y (iv) no infringir nuestros derechos de propiedad intelectual. Si realiza alguna de las acciones mencionadas anteriormente, sus derechos de uso de la Plataforma o cualquiera de los productos o servicios vinculados a ella serán inmediatamente rescindidos, sin perjuicio de las acciones legales que pudieren corresponder.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              4. ENLACES DE TERCEROS
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La Plataforma puede o podrá contener enlaces a otros sitios web, incluyendo productos integrados de terceros o información o servicios que sean prestados o generados por terceros. En caso de que los servicios o productos que ofrezca humanix-tech involucren servicios que sean prestados por terceros, en plataformas o aplicativos de propiedad de, o administrados por, dichos terceros, humanix-tech exigirá a esos terceros la implementación, cumplimiento y mantenimiento de políticas, obligaciones y prácticas de privacidad que cumplan con estándares legalmente exigibles para la protección y resguardo de los datos personales de propiedad de los usuarios de la Plataforma. Sin embargo, humanix-tech no será responsable por los posibles incumplimientos de esos terceros a sus obligaciones.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              No ejercemos control sobre las plataformas o sitios web de terceros. En caso de acceder a plataformas o sitios web de terceros, deberá siempre leer los términos y condiciones de uso y la política de privacidad aplicables. humanix-tech no será responsable por daños o pérdidas relacionadas con el uso de cualquier contenido, bienes o servicios disponibles en o a través de cualquier sitio web de terceros.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              5. DERECHOS DE PROPIEDAD INTELECTUAL
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              El software, el contenido y el diseño de la Plataforma junto con el texto, los guiones, los gráficos, las funciones interactivas y las marcas registradas, marcas de servicio y logotipos constituyen y están protegidos como propiedad intelectual de humanix-tech. El contenido de la Plataforma está protegido por las leyes y los tratados internacionales de derecho de autor y copyright. La descarga, guarda, impresión y copia de cualquier contenido de la Plataforma podrá realizarse únicamente para su uso personal y no comercial, y dentro de los términos y condiciones que rigen la prestación de los servicios que sean contratados con humanix-tech. Se prohíbe la reproducción o transmisión, de cualquier forma y por cualquier medio, de cualquier parte de la información contenida en esta Plataforma, incluidos textos, gráficos y código html, sin permiso expreso por escrito de humanix-tech.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              6. GARANTÍAS Y RESPONSABILIDAD
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Ni humanix-tech ni la Plataforma a la que Usted accede realizan ni contienen ninguna garantía, explícita ni implícita, en cuanto a los servicios o productos que humanix-tech y/o la Plataforma ofrecen, ni su aptitud ni idoneidad para un propósito, fin o uso determinado. Usted irrevocablemente libera y exime de responsabilidad a humanix-tech y a sus funcionarios, directores, gerentes empleados y demás representantes de cualquier responsabilidad por cualquier contenido, información o uso de la Plataforma. En consecuencia, Usted comprende que Usted usa la Plataforma por su cuenta y riesgo, incluyendo los daños que Usted pudiera sufrir.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              7. LEY Y JURISDICCIÓN
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Los presentes Términos y Condiciones se regirán e interpretarán con arreglo a la legislación vigente en la República Argentina, debiendo cualquier divergencia relacionadas a los presentes resolverse ante los tribunales ordinarios de la Ciudad de Villa María, Provincia de Córdoba.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              8. CONTACTO
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