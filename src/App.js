import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Aquí se actualiza Switch por Routes
import "aos/dist/aos.css"; // Importa el CSS de AOS para las animaciones
import AOS from "aos"; // Importa AOS para manejar las animaciones
import "./App.css"; // Importa los estilos personalizados de la aplicación

// Importa imágenes y otros recursos
import logo from "./images/logotipo-pagina web-nuevo.svg";
import lucas from "./images/lucas.png";
import pruebaEfectoMagico from "./images/ilustracion (3).png";
import checkRegular from "./images/check-regular-24.png";
import xRegular from "./images/x-regular-24.png";
import logoMorado from "./images/Logo_Morado.png";
import two from "./images/2.png";
import lukasExpress from "./images/lukas express.png";
import clientes4 from "./images/clientes (4).svg";
import benefit1 from "./images/clientes (1).svg";
import benefit2 from "./images/clientes (2).svg";
import benefit3 from "./images/clientes (3).svg";
import benefit4 from "./images/clientes (4).svg";
import bee from "./images/abeja24.png"; // Asegúrate de que el nombre sea correcto
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de que Bootstrap esté importado
import { Carousel } from "react-bootstrap"; // Si estás usando React Bootstrap

// Importa imágenes del carrusel
import image1 from "./images/restaurante-carousel (1).jpg";
import image2 from "./images/restaurante-carousel (2).jpg";
import image3 from "./images/restaurante-carousel (3).jpg";
import image4 from "./images/restaurante-carousel (4).jpg";
import image5 from "./images/restaurante-carousel (5).jpg";
import image6 from "./images/restaurante-carousel (6).jpg";
import image7 from "./images/restaurante-carousel (7).jpg";
import image8 from "./images/restaurante-carousel (8).jpg";
import image9 from "./images/restaurante-carousel (9).jpg";
import image10 from "./images/restaurante-carousel (10).jpg";
import matrimonioImage from "./images/matrimonio.jpg";
import quinceanerasImage from "./images/quinceañera.jpg";
import primeraComunionImage from "./images/primera-comunion.jpg";

// Importa componentes personalizados
import ServicePackagesSection from './ServicePackagesSection';
import "./ServicePackagesSection.css"; // Estilos específicos para la sección de paquetes de servicios
import imagen1 from "./images/embudo-muestra.jpg"; // Importa la imagen 1
import imagen2 from "./images/embudo-muestra2.jpg"; // Importa la imagen 2
import imagen3 from "./images/embudo-muestra3.jpg"; // Importa la imagen 3
import imagen4 from "./images/embudo-muestra4.jpg"; // Importa la imagen 4
import FAQSection from "./FAQSection"; // Sección de preguntas frecuentes
import ContactSection from "./ContactSection"; // Sección de contacto
import FooterSection from "./FooterSection"; // Footer
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa Font Awesome para los íconos
import QAPage from './QAPage'; // preguntas y respuestas
import './QAPage.css';

function App() {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    // Inicializa la animación AOS
    AOS.init();

    // Activa la animación del logo cuando el componente se monta
    setAnimateLogo(true);

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      // Cambia la clase de la navbar cuando se hace scroll
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // Mueve la abeja con el cursor
    const handleMouseMove = (event) => {
      const beeElement = document.getElementById("bee");
    
      if (beeElement) { // Verificar si el elemento existe
        const offsetX = 50; // Ajusta este valor para mover la abeja en el eje X
        const offsetY = 50; // Ajusta este valor para mover la abeja en el eje Y
    
        const x = event.clientX + offsetX;
        const y = event.clientY + offsetY;
    
        // Usa requestAnimationFrame para un movimiento más suave
        window.requestAnimationFrame(() => {
          beeElement.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };
    
    // Añade el listener de evento
    window.addEventListener("mousemove", handleMouseMove);
    

    // Añade los event listeners para scroll y movimiento del mouse
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div>
              {/* Menú de navegación */}
              <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid justify-content-center">
                  <Link className="navbar-brand" to="/">
                    Lucas S. Web Designer
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                          INICIO
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#about">
                          QUIÉNES SOMOS
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          PROYECTOS <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-code"></i> Desarrollo Web
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-paint-brush"></i> Diseño Gráfico
                            </a>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/qa">
                              <i className="fas fa-code"></i> Preguntas y Respuestas
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">
                          CONTÁCTAME
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              {/* Encabezado de la página */}
              <header className="text-center d-flex align-items-center justify-content-center vh-100">
                <div className="container position-relative">
                  <img
                    src={logo}
                    alt="Lucas Salazar - Web Designer"
                    className={`img-fluid ${animateLogo ? "logo-animation" : ""}`}
                    data-aos="fade-down" // Aplicar animación AOS
                  />
                  <a
                    href="#contact"
                    className="btn btn-outline-light btn-lg position-absolute button-center button-slide-in"
                  >
                    ¡Quiero contratar sus servicios!
                  </a>
                </div>
              </header>

              {/* Sección Sobre Mí */}
              <section id="about" className="py-8 light-section" data-aos="fade-up">
                <div className="container d-flex flex-column flex-md-row align-items-center">
                  <div className="col-md-7 text-start mb-4 mb-md-0">
                    <h2 className="display-4 mb-3">
                      <strong>¡DISEÑA UN FUNNEL GANADOR PARA TU NEGOCIO!</strong>
                    </h2>
                    <p className="lead mb-4">
                      <strong>
                        Soy Lucas Salazar, desarrollador web apasionado por la
                        tecnología, y mi misión es transformar ideas en diseños web
                        impactantes. Juntos, mostraremos al mundo cómo tu negocio puede
                        dejar una huella positiva y, con mi apoyo, lo llevaremos al
                        siguiente nivel.
                      </strong>
                    </p>
                    <p className="lead mb-4">
                      <strong>
                        Ofrezco un ecosistema totalmente orgánico y un soporte técnico
                        integral para garantizar que tu presencia en línea sea sólida y
                        efectiva. Además, te enseñaré a dominar los embudos de venta
                        (funnels), permitiéndote contar con un "vendedor" disponible
                        24/7 que trabajará incansablemente para ti.
                      </strong>
                    </p>
                    <div className="text-center">
                      <a href="#contact" className="btn btn-funnel mt-4">
                        ¡Quiero mi funnel!
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 text-center mt-4 mt-md-0">
                    <img
                      src={lucas}
                      alt="Lucas Salazar"
                      className="img-fluid rounded-circle highlighted-image"
                    />
                  </div>
                </div>
              </section>

              {/* Sección de Clientes */}
              <section id="clientes" className="py-5" data-aos="fade-up">
                <div className="container">
                  <h2 className="display-4 section-title text-center mb-5">
                    <strong>CONFIAN EN NOSOTROS</strong>
                  </h2>
                  <div className="row text-center">
                    {/* Repetición de logos de clientes */}
                    <div className="col-2">
                      <img
                        src={logoMorado}
                        className="rounded img-fluid client-img"
                        alt="clientes-1"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={two}
                        className="rounded img-fluid client-img"
                        alt="clientes-2"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={lukasExpress}
                        className="rounded img-fluid client-img"
                        alt="clientes-3"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={clientes4}
                        className="rounded img-fluid client-img"
                        alt="clientes-4"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={clientes4}
                        className="rounded img-fluid client-img"
                        alt="clientes-4"
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={clientes4}
                        className="rounded img-fluid client-img"
                        alt="clientes-4"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección de Imágenes con Movimiento */}
              <section
                id="moving-images"
                className="py-5 text-center"
                data-aos="fade-right"
              >
                <div className="container position-relative d-flex flex-column flex-md-row align-items-center">
                  <div className="col-md-6 text-center mb-4 mb-md-0">
                    <div className="image-wrapper">
                      <img
                        src={pruebaEfectoMagico}
                        alt="Diseño Responsivo"
                        className="img-fluid moving-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center py-5">
                    <h2 className="display-4 mb-3">
                      <strong>DISEÑO RESPONSIVO</strong>
                    </h2>
                    <h5 className="mb-4 text-white">
                      <strong>La Clave del Éxito en la Era Digital</strong>
                    </h5>
                    <p className="lead mb-4">
                      El diseño responsivo asegura que tu sitio web se vea y funcione
                      perfectamente en cualquier dispositivo. Nuestro servicio ofrece
                      experiencia, soluciones personalizadas, tecnología avanzada,
                      enfoque en el usuario, soporte continuo y resultados comprobados,
                      mejorando la experiencia del usuario y aumentando las
                      conversiones.
                    </p>
                    <a href="#contact" className="btn btn-funnel mt-4">
                      ¡Más Información!
                    </a>
                  </div>
                </div>
              </section>

              {/* Sección de Importancia de la Presencia Web */}
              <section id="web-presence" className="text-center py-4">
                <div className="container">
                  <h2 className="mb-4">LA IMPORTANCIA DE TENER PRESENCIA WEB</h2>
                  <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10">
                      <p className="lead text-center">
                        En el mundo digital de hoy, no tener una presencia web es como
                        no existir. Imagina un negocio que no cierra nunca, un vendedor
                        que nunca duerme, y una oportunidad que se multiplica 24/7. Esa
                        es la magia de estar en internet. Pero no se trata solo de
                        estar, se trata de destacar. Tu negocio necesita más que una
                        simple página, necesita una presencia que convierta visitantes
                        en clientes, que refleje tu esencia y que te posicione frente a
                        la competencia.
                      </p>
                      <p className="lead text-center">
                        Una página web personalizada no es un lujo, es una necesidad. Es
                        la herramienta que transforma tu visión en resultados, que habla
                        por ti cuando no puedes estar presente, y que conecta con tu
                        audiencia de manera única y auténtica. Cada negocio tiene su
                        historia, y nosotros te ayudamos a contarla de la manera más
                        efectiva posible, asegurándonos de que no solo seas visto, sino
                        recordado.
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-12">
                      <Carousel className="presence-carousel" interval={3000}>
                        {/* Intervalo en milisegundos para el carrusel */}
                        <Carousel.Item>
                          <img className="d-block w-100" src={image1} alt="Imagen 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image2} alt="Imagen 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image3} alt="Imagen 3" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image4} alt="Imagen 4" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image5} alt="Imagen 5" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image6} alt="Imagen 6" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image7} alt="Imagen 7" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image8} alt="Imagen 8" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img className="d-block w-100" src={image9} alt="Imagen 9" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={image10}
                            alt="Imagen 10"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección de Servicios Adicionales */}
              <section id="additional-services" className="py-5" data-aos="fade-up">
                <div className="container">
                  <h2 className="display-4 section-title">INVITACIONES DIGITALES</h2>

                  <div className="row section-description-row">
                    <div className="col-md-8 section-description-box left-box">
                      <h4 className="section-subtitle">
                        "Impresiona desde el primer clic"
                      </h4>
                      <p className="section-description">
                        ¿Por qué conformarte con lo convencional cuando puedes ofrecer
                        una experiencia que despierta todos los sentidos desde el primer
                        instante? Nuestras invitaciones digitales no solo redefinen la
                        elegancia y la modernidad, sino que también te permiten elevar
                        tu evento a un nivel completamente inesperado.
                      </p>
                    </div>
                  </div>

                  <div className="row section-description-row">
                    <div className="col-md-8 offset-md-4 section-description-box right-box">
                      <h4 className="section-subtitle">"Una experiencia inmersiva"</h4>
                      <p className="section-description">
                        Imagina enviar una invitación que no solo deslumbre a tus
                        invitados con un diseño impecable, sino que también incluya un
                        video personalizado, una nota de voz con tus palabras de
                        bienvenida, o incluso tu canción favorita, que se reproducirá
                        cada vez que la abran. Es mucho más que una simple invitación;
                        es una experiencia que crea una conexión emocional y deja un
                        recuerdo imborrable desde el primer momento.
                      </p>
                    </div>
                  </div>

                  <div className="row section-description-row">
                    <div className="col-md-8 section-description-box left-box">
                      <h4 className="section-subtitle">"Más allá de lo esperado"</h4>
                      <p className="section-description">
                        Con nuestras invitaciones digitales, tus invitados tendrán
                        acceso a un mapa interactivo del lugar de la celebración, un
                        emocionante conteo regresivo que aumentará la anticipación, y
                        podrán confirmar su asistencia con un solo clic. Además, el
                        enlace llevará a tus invitados a un álbum digital exclusivo con
                        los mejores momentos del evento, disponible para que todos lo
                        revivan una y otra vez.
                      </p>
                    </div>
                  </div>

                  {/* Sección de servicios individuales tarjetas */}
                  <div className="row">
                    <div className="col-md-4 text-center mb-4">
                      <div className="service-box">
                        <img
                          src={matrimonioImage}
                          alt="Servicio Matrimonio"
                          className="img-fluid service-image"
                        />
                        <h3 className="service-title">MATRIMONIO</h3>
                        <p className="service-description">
                          Haz que cada invitado sienta la emoción desde el primer
                          momento con una invitación digital única y elegante. Ahorra
                          tiempo, llega a más personas, y asegura que tu día especial
                          comience con un toque moderno.
                        </p>
                        <a href="/servicio-1" className="btn btn-service">
                          Más Información
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                      <div className="service-box">
                        <img
                          src={quinceanerasImage}
                          alt="Servicio Quinceañeras"
                          className="img-fluid service-image"
                        />
                        <h3 className="service-title">QUINCEAÑERAS</h3>
                        <p className="service-description">
                          Transforma el inicio de tu celebración en un evento memorable
                          con invitaciones digitales que capturan la esencia de tus
                          quince años. Sorprende a tus amigos y familia desde el primer
                          clic.
                        </p>
                        <a href="/servicio-2" className="btn btn-service">
                          Más Información
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                      <div className="service-box">
                        <img
                          src={primeraComunionImage}
                          alt="Servicio Primera Comunión"
                          className="img-fluid service-image"
                        />
                        <h3 className="service-title">PRIMERA COMUNIÓN</h3>
                        <p className="service-description">
                          Celebra este momento especial con invitaciones que combinan la
                          tradición y la modernidad. Fácil de compartir y recordar, una
                          invitación digital asegura que cada detalle sea perfecto.
                        </p>
                        <a href="/servicio-3" className="btn btn-service">
                          Más Información
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección Para Quién Es Este Servicio */}
              <section id="for-whom" className="text-center py-5" data-aos="fade-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h2 className="display-4 section-title">
                        Para Quién Es Este <br />
                        Servicio
                      </h2>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Personas que quieren vender más</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Tiendas Online</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Emprendedores</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Freelancers</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Pequeñas Empresas</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={checkRegular}
                          alt="Icono de Chulito"
                          className="service-icon"
                        />
                        <p className="lead">Consultores</p>
                      </div>
                    </div>
                    <div id="for-whom-no" className="col-md-6 mb-4">
                      <h2 className="display-4 section-title">
                        Para Quién <strong>NO</strong> Es Este Servicio
                      </h2>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">
                          Personas que <strong>NO</strong> están dispuestas a invertir
                        </p>
                      </div>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">Negocios sin presencia digital</p>
                      </div>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">
                          Personas que <strong>NO</strong> creen en el comercio
                          electrónico
                        </p>
                      </div>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">
                          Personas que <strong>NO</strong> buscan un{" "}
                          <strong>cambio</strong>
                        </p>
                      </div>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">
                          Personas que <strong>NO</strong> necesitan{" "}
                          <strong>vender</strong> más
                        </p>
                      </div>
                      <div className="service-item">
                        <img
                          src={xRegular}
                          alt="Icono de Cruz"
                          className="service-icon"
                        />
                        <p className="lead">
                          Negocios que <strong>NO</strong> desean escalar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sección testimonios */}
              <section
                id="testimonials"
                className="text-center py-5"
                data-aos="fade-right"
              >
                <div className="container">
                  <h2 className="display-4 mb-4">QUÉ DICEN NUESTROS CLIENTES</h2>
                  <div
                    id="carouselTestimonials"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="testimonial mx-auto">
                          <p className="lead text-center">
                            "El servicio fue excepcional. Mi sitio web es exactamente lo
                            que necesitaba.
                            <br /> ¡Muy recomendable!"
                          </p>
                          <p className="text-center">
                            <strong>- JUAN FERNANDO H.</strong>
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial mx-auto">
                          <p className="lead text-center">
                            "Lucas hizo un trabajo increíble. La atención al detalle y
                            el soporte continuo son impresionantes."
                          </p>
                          <p className="text-center">
                            <strong>- DANIELA VILLA</strong>
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial mx-auto">
                          <p className="lead text-center">
                            "Estoy muy satisfecho con el diseño de mi página web.
                            <br /> ¡Definitivamente trabajaré con él de nuevo!"
                          </p>
                          <p className="text-center">
                            <strong>- JUANA GONZALEZ</strong>
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselTestimonials"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselTestimonials"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </section>

              <section id="why-choose-me" className="py-5" data-aos="fade-up">
                <div className="container position-relative">
                  <div className="row align-items-center">
                    {/* Columna del video */}
                    <div className="col-md-6">
                      <div className="video-wrapper">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/vbAbhLHJg2M?si=VNJyIauR0M-ZZRcT"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Columna del texto */}
                    <div className="col-md-6 text-center text-md-start">
                      <h2 className="display-4 section-title">POR QUÉ ELEGIRME</h2>
                      <p className="lead section-paragraph">
                        No solo diseño páginas web; construyo herramientas de venta que
                        funcionan 24/7 para ti. Mi enfoque está en crear soluciones
                        personalizadas que reflejen la esencia de tu marca y maximicen
                        tus conversiones. Utilizo tecnología avanzada y te acompaño con
                        soporte continuo para que tu presencia en línea sea sólida y
                        efectiva. Con resultados comprobados y clientes satisfechos,
                        elijo calidad sobre cantidad. Si buscas destacar y convertir
                        visitantes en clientes, soy la elección correcta.
                      </p>
                    </div>
                  </div>

                  {/* Botón centrado debajo de la fila */}
                  <div className="text-center mt-4">
                    <a href="#tu-seccion" className="btn btn-funnel">
                      ¡Más Información!
                    </a>
                  </div>
                </div>
              </section>

              {/* Aquí se agrega la nueva sección de Paquetes de Servicios */}
              <ServicePackagesSection />

              {/* Inserta aquí la sección de Preguntas Frecuentes */}
              <FAQSection />

              {/* Aquí se inserta la sección de contacto */}
              <ContactSection />

              {/* Sección de Footer */}
              <FooterSection />

              {/* Enlace al icono flotante de WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  width="65"
                  height="65"
                />
              </a>

              {/* Abeja Animada */}
              <img id="bee" src={bee} alt="Abeja Animada" className="bee-animation" />
            </div>
          } />
          <Route path="/qa" element={<QAPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
