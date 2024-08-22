import React from 'react'; // Importa React para utilizar JSX y componentes
import './FooterSection.css'; // Importa los estilos específicos para el footer

// Componente funcional FooterSection
function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Columna de Contacto */}
          <div className="col-md-3 footer-column">
            <h5>SOY ARTE</h5>
            <p>Dirección: Calle Falsa 123</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Correo: contacto@soyarte.com</p>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div className="col-md-3 footer-column">
            <h5>ENLACES RÁPIDOS</h5>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#about">Sobre Nosotros</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Columna de Redes Sociales */}
          <div className="col-md-3 footer-column">
            <h5>SÍGUENOS</h5>
            <div className="social-icons">
              {/* Asegúrate de que los íconos de FontAwesome se estén importando correctamente */}
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Columna de Suscripción */}
          <div className="col-md-3 footer-column">
            <h5>SUSCRÍBETE</h5>
            <form className="subscribe-form">
              <input type="email" placeholder="Tu correo electrónico" className="form-control" />
              <button type="submit" className="btn btn-subscribe">Suscribirse</button>
            </form>
          </div>
        </div>

        {/* Sección inferior del footer con derechos reservados y enlaces de política */}
        <div className="footer-bottom">
          <p>&copy; 2024 Todos los derechos reservados: Soy Arte</p>
          <p><a href="#privacidad">Política de Privacidad</a> | <a href="#terminos">Términos y Condiciones</a></p>
          <p>Diseñado por Lucas Salazar</p>
        </div>
      </div>
    </footer>
  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default FooterSection;
