import React from "react";

function Btn(props) {
  const handleScrollClickBtn = () => {
    const hackathon = document.querySelector("#hackathon");

    if (hackathon) {
      hackathon.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="btn" onClick={handleScrollClickBtn}>
      {" "}
      {props.children}{" "}
    </button>
  );
}

export default Btn;
