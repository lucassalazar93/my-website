import React from 'react';
import './QAPage.css'; // Importa el archivo CSS correspondiente

const QAPage = () => {
  return (
    <div className="qa-page">
      <h1 className="qa-title">Preguntas y Respuestas</h1>
      <ul className="qa-list">
        <li><strong>Diferencia entre React y JSX:</strong> JSX es una extensión de sintaxis de JavaScript que se utiliza en React para describir la interfaz de usuario. React es una biblioteca que utiliza JSX para crear componentes interactivos.</li>
        <li><strong>Qué son clases en React:</strong> Las clases en React se utilizan para definir componentes basados en clases, que son una forma de crear componentes con estado y ciclos de vida.</li>
        <li><strong>Principales eventos en React:</strong> Los eventos en React son manejadores que permiten responder a interacciones del usuario, como clics, entradas de teclado, entre otros.</li>
        <li><strong>Mapa conceptual en React:</strong> Un mapa conceptual en React podría representar la estructura de componentes y cómo se comunican entre sí mediante props y estado.</li>
      </ul>
    </div>
  );
}

export default QAPage;
