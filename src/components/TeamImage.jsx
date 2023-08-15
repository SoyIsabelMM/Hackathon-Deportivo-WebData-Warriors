import React from "react";

function TeamImage(props) {
  console.log(props);

  return (
    <>
      <img
        className="about-us__image"
        src={props.src}
        alt="Foto equipo WebData Warrios"
      />
      <div className="about-us__container">
        <h3 className="about-us__text"> {props.name} </h3>
        <h4 className="about-us__text"> {props.profession} </h4>
      </div>
    </>
  );
}

export default TeamImage;
