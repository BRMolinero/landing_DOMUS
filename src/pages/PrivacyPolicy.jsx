import React from 'react';
import { Layout, Typography, Button, Row, Col, Tooltip } from 'antd';
import { ArrowLeftOutlined, SafetyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const PrivacyPolicy = () => {
  const navigate = useNavigate();

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
                  <SafetyOutlined style={{ marginRight: 16, color: '#00C2C7' }} />
                  Política de Privacidad
                </Title>
              </Col>
              <Col flex="none" style={{ width: 120 }}></Col>
            </Row>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              <strong style={{ color: '#0B3C5D' }}>Última actualización:</strong> Octubre 2025
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              humanix-tech valora a sus usuarios y está comprometida a proteger su privacidad. Para cumplir este compromiso, humanix-tech ha desarrollado la presente Política de Privacidad que describe las prácticas de humanix-tech en lo que se refiere a la recolección, uso, conservación y divulgación de información personal recopilada. Al registrarse, visitar y/o utilizar la plataforma de humanix-tech (la "Plataforma"), Usted ("Usted" o el "Usuario") acepta las políticas y prácticas que se detallan a continuación, con base en lo establecido en la Ley de Protección de Datos Personales 25.326 y el Decreto Reglamentario 1558/01, así como en las normas reglamentarias vigentes y aplicables en la materia.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              La Plataforma incluye el sitio web de humanix-tech, y los productos y servicios que se ofrecen a través de dicho sitio, incluyendo Domüs, y sus respectivos sitios web, aplicaciones móviles y aplicaciones web progresivas (PWA).
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              humanix-tech podrá realizar modificaciones a esta Política de Privacidad en el futuro. Cualquier modificación a esta Política de Privacidad será publicada en esta página, por lo que se aconseja revisar periódicamente la Política de Privacidad.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              La Plataforma consiste en un sistema de gestión y asistencia integrado mediante un robot asistente (Domüs) que incluye operaciones de monitoreo ambiental, detección de gases tóxicos, y funciones de asistencia dirigidas a personas con movilidad reducida, visión reducida y adultos mayores. Asimismo, proporciona a los usuarios acceso a través de aplicaciones web progresivas (PWA), aplicaciones móviles y tableros de control que se basan en indicadores clave de monitoreo ambiental y seguridad, para medir la evolución y actividad del sistema. La Plataforma se utiliza también a través de nuestro sitio web, de nuestras aplicaciones móviles, aplicaciones web progresivas y de la utilización de nuestros productos.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 32 }}>
              El responsable de la base de datos en la República Argentina es humanix-tech, domiciliada en Corrientes 1098, Villa María, Provincia de Córdoba, Argentina.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              1. ALCANCE Y CONSENTIMIENTO
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Al ingresar y utilizar esta Plataforma, el Usuario consiente en que se obtenga y utilice la información personal referida a la identidad del Usuario, entendiéndose por ello, sin carácter taxativo, la siguiente: nombre y apellido, dirección, teléfono, dirección de e-mail, nacionalidad, información sobre el uso del sistema Domüs que sea desarrollado por el Usuario, su ubicación, datos ambientales, datos de sensores, datos de monitoreo, datos de gestión y datos de uso que el Usuario mismo proporciona a través del uso de la Plataforma o el uso o contratación de nuestros productos y/o servicios (en adelante la "Información Personal") para los fines propios de la Plataforma, y/o cualquier información necesaria para la prestación de los servicios contratados a humanix-tech.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La política de tratamiento de datos personales es aplicable a cualquier registro de datos personales hecho por humanix-tech en forma presencial, telefónica y/o virtual, incluyendo cualquier información que el titular ingrese por sí mismo a través de medios electrónicos o virtuales dispuestos por humanix-tech.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Toda Información Personal es recolectada y almacenada en servidores que pueden estar ubicados físicamente dentro o fuera del país. Usted presta su consentimiento para que humanix-tech pueda transferir su Información Personal con destino a cualquier país del mundo. En cualquier caso, humanix-tech se compromete a garantizar que se cumpla con estándares legalmente exigibles para la protección y resguardo de su Información Personal, mediante la firma de acuerdos o convenios cuyo objeto sea la privacidad de sus datos personales.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Usted es el titular de su Información Personal y Usted tiene derecho exclusivo sobre la misma. humanix-tech procesa y utiliza su Información Personal con fines estadísticos, agregados y acumulados para proveer los servicios que presta y los productos que ofrece a través de la Plataforma, sin que sea posible identificar ni rastrear de manera individual su propia Información Personal.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              2. FINALIDAD, CONSERVACIÓN Y TRATAMIENTO DE LOS DATOS PERSONALES
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Al ingresar y utilizar esta Plataforma y los servicios y productos que humanix-tech ofrece, Usted presta su consentimiento expreso e informado a humanix-tech para que la Información Personal (i) se procese y almacene en servidores o medios magnéticos y/o digitales y/o (ii) se haga un uso científico y estadístico para la mejora de los servicios, productos y contenidos de la Plataforma y/o (iii) se suministre a cualquier sociedad que integre el mismo grupo empresarial al que humanix-tech pertenezca y/o a clientes, proveedores de productos y/o servicios con quienes humanix-tech tenga un convenio comercial vigente, con el objeto de entregar, ofrecer y/o vender productos, servicios y soluciones.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              humanix-tech podrá encargar el tratamiento de datos personales a terceros quienes deberán seguir y acatar las políticas e instrucciones dadas por humanix-tech verificando que actúen bajo los parámetros de Ley y con base a las instrucciones y políticas definidas por humanix-tech. El Usuario presta su consentimiento expreso e informado a humanix-tech para la transferencia de datos personales, incluyendo su Información Personal, en cuyo caso el receptor de los datos personales asumirá las mismas obligaciones que surgen de la aplicación de esta Política y de las leyes aplicables.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La información que humanix-tech pueda revelar, a través de los productos, servicios y soluciones que ofrece, no será Información Personal ni información que pueda identificar ni asociar a ningún Usuario, sino que se limitará a informes que contengan datos estadísticos, agregados y acumulados sobre los Usuarios.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              3. POLÍTICA DE COOKIES
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              humanix-tech podrá recoger y procesar información sobre su utilización de la Plataforma y sus visitas a los sitios webs, aplicaciones móviles, las páginas que visita y las búsquedas que realiza. Esta información podrá ser utilizada por humanix-tech para mejorar el contenido de la Plataforma. A estos fines, podremos instalar "cookies" u otras tecnologías similares, que son un conjunto de datos de tamaño reducido que se envían a su navegador y se almacenan en el disco rígido de su ordenador o dispositivo conectado a Internet. Las cookies pueden servir para facilitar el uso de un sitio web, al guardar contraseñas y preferencias mientras el Usuario navega en Internet.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Aunque la mayoría de los navegadores aceptan "cookies" automáticamente, en todo momento, usted podrá elegir no recibir un archivo de cookies habilitando su navegador web para que rechace cookies o le informe antes de aceptarlas (para obtener detalles, puede consultar www.aboutcookies.org).
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Mediante la tecnología cookie o el rastreo IP u otras tecnologías, humanix-tech pueden acceder a otra información acerca del Usuario que consiste en información sobre el navegador que utiliza, el tipo de computadora, sus sistemas operativos, sus proveedores del servicio de Internet, las secciones de la Plataforma que Ud. visita, los vínculos que Usted establece y otra información similar. Esta información será utilizada por humanix-tech a fin de conocer cuáles son las áreas preferidas de la Plataforma, qué tecnología se está utilizando, etc. y mejorar constantemente la misma.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              4. SEGURIDAD, CUSTODIA, TRANSPARENCIA, CALIDAD Y CONFIDENCIALIDAD DE LOS DATOS PERSONALES
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              humanix-tech aplica las mejores prácticas y su mayor esfuerzo en la seguridad, custodia y confidencialidad de los datos personales de los titulares, verificando las excepciones legales para la entrega de los mismos a la autoridad y los casos pertinentes, todo lo anterior, con el más alto nivel de confidencialidad y seguridad.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Si bien humanix-tech utiliza dispositivos de seguridad, como ser "firewalls", técnicas de codificación, contraseñas de uso y otras medidas, y afecta todos sus esfuerzos a fin de asegurar su privacidad, no puede ofrecer garantías absolutas contra el uso indebido o alteración de la información que está bajo su control.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              humanix-tech implementa todas las medidas necesarias para mantener la seguridad de la información personal de los titulares de datos, contemplando medidas prácticas, técnicas y organizativas internas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos, a los fines de evitar el acceso no autorizado, destrucción, utilización, modificación o divulgación de los datos, de acuerdo a lo previsto en el artículo 9 de la Ley de Protección de Datos Personales 25.326, normas complementarias y en particular en la Resolución 47/2018 de la Agencia de Acceso a la Información Pública, que establece las distintas medidas de seguridad para el tratamiento y conservación de datos personales contenidos en bancos de datos privados.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              5. POLÍTICAS DE PRIVACIDAD DE TERCEROS
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La presente política de privacidad solo se refiere al uso y divulgación de datos personales por parte de humanix-tech. La Plataforma cuenta o puede contar con publicidad u otros contenidos que establecen un vínculo con sitios o servicios de terceros.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Asimismo, los servicios y productos que humanix-tech ofrece y/o pudiera ofrecer podrían involucrar servicios que sean prestados por terceros, incluyendo el acceso por parte del Usuario a las plataformas o aplicativos de propiedad de, o administrados por, dichos terceros. humanix-tech no compartirá su Información Personal con terceros, excepto que usted nos lo autorice. En caso de que los servicios o productos que ofrezca humanix-tech involucre servicios que sean prestados por terceros, en plataformas o aplicativos de propiedad de, o administrados por, dichos terceros, humanix-tech exigirá a esos terceros la implementación, cumplimiento y mantenimiento de políticas, obligaciones y prácticas de privacidad que cumplan con estándares legalmente exigibles para la protección y resguardo de la Información Personal. Sin embargo, humanix-tech no será responsable por los posibles incumplimientos de esos terceros a sus obligaciones.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Los sitios web a los que usted podría acceder a través de la Plataforma tienen sus propias políticas y prácticas de privacidad. Le recomendamos que se familiarice con las políticas de privacidad de todos los terceros antes de acceder y/o suministrarles información.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              6. DERECHOS DEL TITULAR DE LOS DATOS PERSONALES
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Los usuarios titulares de la Información Personal podrán ejercitar los derechos de acceder, cancelar y actualizar su Información Personal, así como a oponerse al tratamiento de la misma y a ser informado de las cesiones llevadas a cabo, en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14 inciso 3 de la Ley de Protección de Datos Personales 25.326 en Argentina. La Agencia de Acceso a la Información Pública tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              7. PROCEDIMIENTO PARA EJERCER LOS DERECHOS DE LOS TITULARES
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Para el efectivo y adecuado ejercicio de los derechos de los titulares, referente a los procedimientos de acceso, rectificación actualización y supresión de datos personales y de revocatoria de la autorización los titulares de los datos deberán dirigirse a humanix-tech a través del correo electrónico info@humanixtech.com
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Si tiene preguntas sobre esta Política de Privacidad o sobre las prácticas de humanix-tech, nos puede contactar a la dirección antes indicada.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Las consultas efectuadas por el titular de los datos, a los fines de obtener acceso a la información de sus datos personales incluidos en las bases de datos de humanix-tech, serán atendidas por humanix-tech dentro de los 10 (diez) días corridos de recibida la solicitud por parte del titular de datos.
            </Paragraph>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Las consultas efectuadas por el titular de los datos respecto su rectificación, actualización o supresión, serán atendidas por humanix-tech dentro de un plazo máximo de 5 (cinco) días hábiles de recibido el reclamo del titular de los datos o advertido el error o falsedad.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              8. AUTORIDAD DE APLICACIÓN
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
            </Paragraph>

            <Title level={2} style={{ color: '#0B3C5D', marginTop: 32, marginBottom: 16, fontSize: '1.4rem' }}>
              9. CONTACTO
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: '#4B5563', marginBottom: 24 }}>
              Para cualquier consulta sobre esta política de privacidad o sobre el manejo de datos de Domüs, puede contactarnos en:
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

export default PrivacyPolicy;