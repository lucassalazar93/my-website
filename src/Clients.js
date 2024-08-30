import logoMorado from './images/Logo_Morado.png';  // Correcta importación desde src/images
import two from './images/2.png';
import lukasExpress from './images/lukas express.png';
import clientes4 from './images/clientes (4).svg';

function Clients() {
  return (
    <section id="clientes" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="display-4 section-title text-center mb-5">
          <strong>CONFIAN EN NOSOTROS</strong>
        </h2>
        <div className="row text-center">
          <div className="col-2">
            <img src={logoMorado} className="rounded img-fluid client-img" alt="clientes-1" />
          </div>
          <div className="col-2">
            <img src={two} className="rounded img-fluid client-img" alt="clientes-2" />
          </div>
          <div className="col-2">
            <img src={lukasExpress} className="rounded img-fluid client-img" alt="clientes-3" />
          </div>
          <div className="col-2">
            <img src={clientes4} className="rounded img-fluid client-img" alt="clientes-4" />
          </div>
          <div className="col-2">
            <img src={clientes4} className="rounded img-fluid client-img" alt="clientes-4" />
          </div>
          <div className="col-2">
            <img src={clientes4} className="rounded img-fluid client-img" alt="clientes-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
