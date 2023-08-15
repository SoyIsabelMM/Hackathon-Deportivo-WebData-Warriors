import React from "react";
import FrontPage from "./FrontPage";
import AboutUs from "./AboutUs";
import Image from "./Chart/Image";
import Chart from "./Chart/Chart";
import "./Chart/Chart.css";
import Info from "./Info";

function Main() {
  return (
    <main className="main">
      <FrontPage />
      <Info />
      <Chart descripcion={0} imagen={Image} />
      <Chart descripcion={1} imagen={Image} className="reverse" />
      <Chart descripcion={2} imagen={Image} />
      <Chart descripcion={3} imagen={Image} className="reverse" />
      <AboutUs />
    </main>
  );
}

export default Main;
