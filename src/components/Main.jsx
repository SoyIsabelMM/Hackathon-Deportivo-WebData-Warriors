import React from "react";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Imagen from "./Grafica/Imagen";
import Imagen2 from "./Grafica/Imagen2";
import Grafica from "./Grafica/Grafica";
import "./Grafica/Grafica.css";
import RankingFifa from "./RankingFifa/RankingFifa";
import Arqueros from "./Arqueros/Arqueros";
import Calificacion from "./Calificacion/Calificacion";

function Main() {
  return (
    <main className="main">
      <FrontPage />
      <RankingFifa />
      <Grafica descripcion={0} imagen={Imagen} />
      <Grafica descripcion={1} imagen={Imagen2} className="reverse" />
      <Arqueros />
      <Calificacion />
      <AboutUs />
    </main>
  );
}

export default Main;
