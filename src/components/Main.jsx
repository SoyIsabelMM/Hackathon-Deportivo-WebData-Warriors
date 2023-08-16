import React from "react";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Imagen2 from "./Grafica/Imagen2";
import RankingFifa from "./RankingFifa/RankingFifa";
import Image from "./Chart/Image";
import Chart from "./Chart/Chart";
import "./Chart/Chart.css";
import Info from "./Info";
import Hackathon from "./Hackathon";
import Archers from "./Archers";
import Calificacion from "./Calificacion/Calificacion";

function Main() {
  return (
    <main className="main">
      <FrontPage />
      <Info />
      {/* <RankingFifa /> */}
      <Archers />
      {/* <Calificacion /> */}
      {/* <Chart descripcion={0} imagen={Image} />
      <Chart descripcion={1} imagen={Imagen2} className="reverse" />
      <Chart descripcion={2} imagen={Image} />
      <Chart descripcion={3} imagen={Image} className="reverse" /> */}
      <Hackathon />
      <AboutUs />
    </main>
  );
}

export default Main;
