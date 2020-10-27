import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Founder.css';

// images
import founderPic from '../../images/founder_pic.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';

export default function Founder() {
  return (
    <div className="container founder">
      <h3 className="founder__heading">About the Founder</h3>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <img className="founder__pic" src={founderPic} alt="card" />
        </div>
        <div className="col-lg-8 col-md-12">
          <p className="founder__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <div className="links">
            <a href="https://github.com/">
              <img className="links__item" src={github} alt="github profile" />
            </a>
            <a href="https://www.instagram.com/">
              <img
                className="links__item"
                src={instagram}
                alt="instagram profile"
              />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img
                className="links__item"
                src={linkedin}
                alt="linkedin profile"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                className="links__item links__item--youtube"
                src={youtube}
                alt="youtube profile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
