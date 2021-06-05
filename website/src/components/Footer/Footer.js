import React from 'react';
import Scroll from '../Scroll/Scroll';
import './Footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import emailImage from '../../images/email-image.png';
import discordImage from '../../images/discord-image.png';
import githubImage from '../../images/github-image.png';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div
        style={{
          backgroundColor: '#e5e5e5',
        }}
      >
        <div className="container">
          <div className="row">
            <Scroll showBelow={280} />
          </div>
          <div className="row">
            <div className="col text-center page-title">
              <h1  style={{textAlign:"center",alignItems:"center"}}>Contact Us</h1>
            </div>
          </div>
          <div className="rowy ">
            <div className="badge-link ">
              <a
                rel="noreferrer"
                href="https://github.com/shikha-16/Women-in-Technology"
                target="_blank"
              >
                <img
                  rel="noreferrer"
                  className="cardy"
                  src={githubImage}
                  alt="github link"
                />
              </a>
            </div>
            <div className="badge-link ">
              <a
                href="https://discord.com/invite/xvzbAXk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="cardy"
                  src={discordImage}
                  alt="discord link"
                />
              </a>
            </div>
            <div className="badge-link ">
              <a
                href="mailto:shikhabhat1608@gmail.com?subject=Test email, please change this"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="cardy"
                  src={emailImage}
                  alt="gmail link"
                />
              </a>
            </div>
          </div>
          <div className="row1">
            <h1>License</h1>

            <p>MIT License</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
