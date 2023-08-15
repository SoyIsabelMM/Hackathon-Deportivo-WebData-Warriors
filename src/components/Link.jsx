import React from "react";

function Link(props) {
  console.log(props);
  return (
    <>
      <a
        className={` ${props.className}`}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>
    </>
  );
}

export default Link;
