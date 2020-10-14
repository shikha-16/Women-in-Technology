import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Scroll from './Scroll';
import './Footer.css';

import emailImage from '../images/email-image.png';
import discordImage from '../images/discord-image.png';
import githubImage from '../images/github-image.png';

export default function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div style={{ backgroundColor: '#e5e5e5' }}>
          <div className="container">
            <div className="row">
              <Scroll showBelow={280} />
            </div>
            <div className="row">
              <div className="col text-center page-title">
                <h1>Contact Us</h1>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4 badge-link ">
                <a
                  rel="noreferrer"
                  href="https://github.com/shikha-16/Women-in-Technology"
                  target="_blank"
                >
                  <img
                    rel="noreferrer"
                    className="card-img-top w-100"
                    src={githubImage}
                    alt="github link"
                  />
                </a>
              </div>
              <div className="col-md-4 badge-link ">
                <a
                  href="https://discord.com/invite/xvzbAXk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top w-100"
                    src={discordImage}
                    alt="discord link"
                  />
                </a>
              </div>
              <div className="col-md-4 badge-link ">
                <a
                  href="mailto:shikhabhat1608@gmail.com?subject=Test email, please change this"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top w-100"
                    src={emailImage}
                    alt="gmail link"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col page-title">
                <h1>License</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>List of license</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
