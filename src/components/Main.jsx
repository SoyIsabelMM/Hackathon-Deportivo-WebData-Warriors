import React from "react";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Imagen from "./Grafica/Imagen";
import Grafica from "./Grafica/Grafica";
import "./Grafica/Grafica.css";

function Main() {
  return (
    <main className="main">
      <FrontPage />
      <Grafica descripcion={0} imagen={Imagen} />
      <Grafica descripcion={1} imagen={Imagen} className="reverse" />
      <Grafica descripcion={2} imagen={Imagen} />
      <Grafica descripcion={3} imagen={Imagen} className="reverse" />
      <AboutUs />
    </main>
  );
}

export default Main;
