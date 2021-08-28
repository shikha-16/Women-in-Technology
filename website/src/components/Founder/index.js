import React from 'react';
import './Founder.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// images
import founderPic from '../../images/founder_pic.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';

export default function Founder() {
  return (
    <div className="container founder">
      <h3 className="founder__heading" style={{ textAlign: 'center' }}>
        About the Founder
      </h3>
      <div className="row" style={{ marginTop: '15px', marginBottom: '15px' }}>
        <div className="col-lg-4 col-md-12">
          <img className="founder__pic" src={founderPic} alt="card" />
        </div>
        <div className="col-lg-8 col-md-12">
          <p className="founder__text">
            Hi! I'm Shikha Bhat, I'm from Pune. I'm a second year Computer
            Science student at BITS Pilani, Goa Campus. Ever since 8th grade,
            Computer Science has fascinated me because it is the essence of
            logic and problem solving, both of which I love. I knew since then
            that I wanted computer science as my major in college. In BITS, I've
            also taken up a minor in Humanities because I want to work at the
            intersection of the computing and social sciences. I want to be able
            to identify problems in society and use data and computational
            methods to examine and solve it in an efficient way. Apart from
            this, I strongly believe that it is my responsibility to give back
            to the community and that is why I have started the Women in Tech
            community. Hope you find it useful!
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
