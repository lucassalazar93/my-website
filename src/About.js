import lucas from './images/lucas.png';  // Correcta importación desde src/images

function About() {
  return (
    <section id="about" className="py-8 light-section" data-aos="fade-up">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-7 text-start mb-4 mb-md-0">
          <h2 className="display-4 mb-3">
            <strong>¡DISEÑA UN FUNNEL GANADOR PARA TU NEGOCIO!</strong>
          </h2>
          <p className="lead mb-4">
            <strong>
              Soy Lucas Salazar, desarrollador web apasionado por la tecnología, y mi misión es transformar ideas en diseños web impactantes. Juntos, mostraremos al mundo cómo tu negocio puede dejar una huella positiva y, con mi apoyo, lo llevaremos al siguiente nivel.
            </strong>
          </p>
          <p className="lead mb-4">
            <strong>
              Ofrezco un ecosistema totalmente orgánico y un soporte técnico integral para garantizar que tu presencia en línea sea sólida y efectiva. Además, te enseñaré a dominar los embudos de venta (funnels), permitiéndote contar con un "vendedor" disponible 24/7 que trabajará incansablemente para ti.
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
  );
}

export default About;
