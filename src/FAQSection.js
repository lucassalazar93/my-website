import React, { useState } from "react";
import "./FAQSection.css";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section py-5">
      <div className="container">
        <h2 className="display-4 section-title text-center">Preguntas Frecuentes</h2>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(0)}>
              <h3>¿Cómo puedo comprar un paquete?</h3>
              <span className="faq-toggle">{activeIndex === 0 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 0 ? "active" : ""}`}>
              <p>Puedes comprar un paquete seleccionando el que mejor se ajuste a tus necesidades y haciendo clic en el botón "¡Obtenlo ahora!". Serás redirigido a la página de pago.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
              <h3>¿Qué métodos de pago aceptan?</h3>
              <span className="faq-toggle">{activeIndex === 1 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
              <p>Aceptamos tarjetas de crédito, débito y pagos a través de PayPal.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(2)}>
              <h3>¿Puedo cancelar mi suscripción en cualquier momento?</h3>
              <span className="faq-toggle">{activeIndex === 2 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
              <p>Sí, puedes cancelar tu suscripción en cualquier momento a través de tu cuenta o contactándonos directamente.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(3)}>
              <h3>¿Cómo puedo contactar con el servicio de soporte?</h3>
              <span className="faq-toggle">{activeIndex === 3 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
              <p>Puedes contactarnos a través del chat en vivo, enviándonos un correo electrónico o llamando a nuestro número de atención al cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
