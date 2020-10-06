import React from "react";

function Img(props) {
  return (
    <img
      className="d-block w-100"
      src={props.img}
      alt={props.alt}
      style={{ height: 200 }}
    />
  );
}

export default Img;
