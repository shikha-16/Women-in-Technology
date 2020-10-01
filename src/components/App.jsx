import React from "react";
import styles from "/public/styles.css";

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

export default function App() {
  return (
    <div className="App">
      <footer>
        <div className="foot">
          <h2 className="text">To Contact Us</h2>
          <h2 id="#add the above id used in the navbar" class="nav">
            ^Back to the Top
          </h2>
          <a href="https://discord.com/invite/xvzbAXk">
            <Img
              className="social"
              img="/images/icons8-discord-50.png"
              alt="discord"
            />
          </a>
          <a href="https://github.com/shikha-16/Women-in-Technology">
            <Img
              className="social"
              img="/images/icons8-github-50.png"
              alt="github"
            />
          </a>
          <a href="">
            {" "}
            {/*Add your gmail id*/}
            <Img
              className="social"
              img="/images/icons8-gmail-50.png"
              alt="gmail"
            />
          </a>
          <p className="content">
            <b>License</b>
          </p>
        </div>
      </footer>
    </div>
  );
}
