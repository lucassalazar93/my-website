import bannerImage from './images/banner-invitacion-2.png'; // Asegúrate de que la ruta sea correcta

const DigitalInvitationsPage = () => {
  return (
    <div className="digital-invitations-page">
      {/* Banner con imagen de fondo */}
      <div className="hero-banner" style={{backgroundImage: `url(${bannerImage})`}}>
        <div className="hero-content">
          <h1 className="hero-title">INVITACIONES DIGITALES LUCAS</h1>
          <p className="hero-subtitle">
            Crea momentos inolvidables con nuestras invitaciones digitales personalizadas.
          </p>
          <a href="#contact" className="btn btn-primary">¡Solicita tu invitación personalizada ahora!</a>
        </div>
      </div>

      <div className="content">
        <h2 className="subtitle">Características</h2>
        <ul className="features-list">
          <li>Diseños personalizables según el evento (Matrimonios, Quinceañeras, Primeras Comuniones, etc.).</li>
          <li>Integración de video y música para una experiencia inmersiva.</li>
          <li>Enlaces interactivos y mapas del lugar del evento.</li>
          <li>Confirmación de asistencia en línea.</li>
          <li>Álbum digital para compartir fotos del evento.</li>
        </ul>
        <h2 className="subtitle">Valor del Producto</h2>
        <p className="price">
          A partir de <strong>$50 USD</strong> por invitación, con descuentos disponibles para pedidos en volumen.
        </p>
        <h2 className="subtitle">¿Por qué elegir nuestras invitaciones digitales?</h2>
        <p className="benefits">
          Nuestras invitaciones digitales no solo son ecológicas y fáciles de enviar, sino que también ofrecen una experiencia interactiva para tus invitados. Cada detalle es cuidadosamente diseñado para asegurarte de que tu invitación se destaque y cree una impresión duradera.
        </p>
      </div>
    </div>
  );
}

export default DigitalInvitationsPage;
