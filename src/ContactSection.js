import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    console.log("Nombre:", name);
    console.log("Correo:", email);
    console.log("Mensaje:", message);
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="display-4 section-title text-center">Contáctanos</h2>
        <p className="text-center contact-description">
          Si tienes alguna pregunta o deseas más información, por favor no dudes en contactarnos. Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className="form-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Correo" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="form-group mb-4">
                <textarea 
                  className="form-control" 
                  rows="5" 
                  placeholder="Mensaje" 
                  required 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
