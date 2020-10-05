import React from "react";

function Img(props) {
  return (
    <img
      style={{ padding: "0 30px 30px 0" }}
      name={props.className}
      src={props.img}
      alt={props.alt}
    />
  );
}

export default Img;