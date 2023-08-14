import React from "react";
import frontImage from "../image/front-image.jpeg";
import Btn from "./Btn";

function FrontPage() {
  return (
    <section className="front-page">
      <div className="front-page__content">
        <h1 className="front-page__title">Análisis de Datos FIFA</h1>
        <Btn>Más info</Btn>
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
