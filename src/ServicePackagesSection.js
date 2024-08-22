import React, { useState, useEffect } from "react";
import "./ServicePackagesSection.css";
import imagen1 from "./images/embudo-muestra.jpg";
import imagen2 from "./images/embudo-muestra2.jpg";
import imagen3 from "./images/embudo-muestra3.jpg";
import imagen4 from "./images/embudo-muestra4.jpg";
import discountImage from "./images/discount.png"; // Asegúrate de tener la imagen de descuento

function ServicePackagesSection() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="service-packages" className="py-5 text-center">
      <div className="container">
        <div className="discount-container">
          <img src={discountImage} alt="50% OFF" className="discount-image left-discount" />
          <h2 className="display-4 section-title">Paquetes de Servicios</h2>
          <img src={discountImage} alt="50% OFF" className="discount-image right-discount" />
        </div>
        <div className="countdown">
          <h2 className="countdown-button">¡Oferta válida por las próximas {formatTime(timeLeft)} horas!</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="package">
              <img src={imagen1} alt="Paquete Básico" className="package-image" />
              <h3>Paquete Básico</h3>
              <p className="old-price">Antes: $1000</p>
              <p>Ahora: $750</p>
              <a href="#" className="btn btn-package">¡Obtenlo ahora!</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="package">
              <img src={imagen2} alt="Paquete Intermedio" className="package-image" />
              <h3>Paquete Intermedio</h3>
              <p className="old-price">Antes: $2000</p>
              <p>Ahora: $1500</p>
              <a href="#" className="btn btn-package">¡Obtenlo ahora!</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="package">
              <img src={imagen3} alt="Paquete Avanzado" className="package-image" />
              <h3>Paquete Avanzado</h3>
              <p className="old-price">Antes: $3000</p>
              <p>Ahora: $2250</p>
              <a href="#" className="btn btn-package">¡Obtenlo ahora!</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="package">
              <img src={imagen4} alt="Paquete Premium" className="package-image" />
              <h3>Paquete Premium</h3>
              <p className="old-price">Antes: $5000</p>
              <p>Ahora: $3500</p>
              <a href="#" className="btn btn-package">¡Obtenlo ahora!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePackagesSection;
