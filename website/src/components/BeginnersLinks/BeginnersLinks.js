import React from "react";

import "./BeginnersLinks.css";
import githubImage from "../../images/social/github-light.png";

export default function BeginnersLinks() {
  return (
    <div>
      <p className="BeginnersLinks__text">
        New to Github and Open Source Contributions?
      </p>
      <div className="BeginnersLinks__links">
        <a
          href="https://github.com/Girlscript-Chapter-Bilaspur/Front-End-Hackathon-Resources/tree/master/Fifth%20Session"
          target="_blank"
          rel="noreferrer"
          className="BeginnersLinks__github-link"
        >
          <img src={githubImage} alt="github link" />
          Learn Github
        </a>
        <a
          href="https://opensource.guide/how-to-contribute/"
          target="_blank"
          rel="noreferrer"
          className="BeginnersLinks__open-source-link"
        >
          Learn How Open Source Work
        </a>
      </div>
    </div>
  );
}
