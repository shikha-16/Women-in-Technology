import React from "react";

function Content(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.para}</p>
    </div>
  );
}

export default Content;
