import React from "react";
import TeamImage from "./TeamImage";
import ireneReynoso from "../image/irene.png";
import matiasAgustin from "../image/Matias-agustin.png";
import juanNajera from "../image/juan-najera.png";
import isabelMartinez from "../image/isabel-martinez.jpeg";

function AboutUs() {
  return (
    <>
      <section className="about-us">
        <div className="about-us__team">
          <TeamImage
            src={ireneReynoso}
            name="Irene Reynoso"
            profession="Data Scientist"
          />

          <TeamImage
            src={matiasAgustin}
            name="Matias Campos"
            profession="Web Developer"
          />
        </div>

        <div className="about-us__team">
          <TeamImage
            src={juanNajera}
            name="Juan Nájera"
            profession="Data Scientist"
          />
          <TeamImage
            src={isabelMartinez}
            name="Isabel Martinez"
            profession="Web Developer"
          />
        </div>
      </section>
    </>
  );
}

export default AboutUs;
