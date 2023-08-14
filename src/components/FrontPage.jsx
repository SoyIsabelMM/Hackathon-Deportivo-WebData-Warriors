import React from "react";
import frontImage from "../image/front-image.jpeg";

function FrontPage() {
  return (
    <section className="front-page">
      <div className="front-page__content">
        <h1 className="front-page__title">Análisis de Datos FIFA</h1>
        <button className="btn">Más info</button>
      </div>

      <img
        src={frontImage}
        alt="Balón de fútbol blanco y azul en el campo de hierba verde"
        className="front-page__image"
      />
    </section>
  );
}

export default FrontPage;
