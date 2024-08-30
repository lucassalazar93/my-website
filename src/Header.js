import logo from './images/logotipo-pagina web-nuevo.svg';  // Correcta importación desde src/images

function Header({ animateLogo }) {
  return (
    <header className="text-center d-flex align-items-center justify-content-center vh-100">
      <div className="container position-relative">
        <img
          src={logo}
          alt="Lucas Salazar - Web Designer"
          className={`img-fluid ${animateLogo ? "logo-animation" : ""}`}
          data-aos="fade-down" 
        />
        <a
          href="#contact"
          className="btn btn-outline-light btn-lg position-absolute button-center button-slide-in"
        >
          ¡Quiero contratar sus servicios!
        </a>
      </div>
    </header>
  );
}

export default Header;
