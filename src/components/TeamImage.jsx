import React from "react";

function TeamImage(props) {
  return (
    <>
      <div className="about-us__container">
        <img
          className="about-us__image"
          src={props.src}
          alt="Foto equipo WebData Warrios"
        />
        <h3 className="about-us__text"> {props.name} </h3>
        <h4 className="about-us__text"> {props.profession} </h4>
      </div>
    </>
  );
}

export default TeamImage;
