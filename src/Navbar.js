// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          Lucas S. Web Designer
        </a>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                INICIO
              </a>
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
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTÁCTAME
              </a>
            </li>
            <li>
             <a className="dropdown-item" href="#">
               <i className="fas fa-code"></i> Preguntas y Respuestas
             </a>
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
