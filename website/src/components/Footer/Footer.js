import React from "react";
import "./Footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import DarkMode from "../DarkMode";
import logo from "../../images/logos/WITfivicon.png";


export default function Footer() {    
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
        <div className='col-sm-5 col-md-2'>
              <img src={logo} alt='' className='imgg' />
        </div>
          <div className="col-sm-2 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Women in Technology empowers women and young girls wanting to
              pursue Computer Science all around the world by increasing
              visibility of resources and opportunities, sharing inspirational
              stories of successful professionals in STEM and through our
              amazing Discord community of women uplifting each other.
            </p>
          </div>

          <div className="col-sm-2 col-md-28">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/community">About Us</a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/xvzbAXk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/contributing">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by <a href="https://women-in-technology-wit.web.app/">Women in Technology</a>.
            </p>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a>
                  <DarkMode />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/shikha-16/Women-in-Technology"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  className="discord"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://discord.com/invite/xvzbAXk"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
              <li>
                <a
                  className="gmail"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:shikhabhat1608@gmail.com?subject=Test email, please change this"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
