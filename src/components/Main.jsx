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
import Qualification from "./Qualification";

function Main() {
  return (
    <main className="main">
      <FrontPage />
      <Info />
      <RankingFifa />
      <Archers />
      <Qualification />
      <Chart descripcion={0} title={0} image={Image} />
      <Chart descripcion={1} title={1} image={Imagen2} />
      <Hackathon />
      <AboutUs />
    </main>
  );
}

export default Main;
