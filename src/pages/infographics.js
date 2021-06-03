import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
} from '@material-ui/core';
import Header from '../components/Header/Header';
import CarouselComponent from '../components/CarouselComponent/CarouselComponent';
import Footer from '../components/Footer/Footer';
import './infographics.css';

import image1 from '../images/carousel-slider/5.png';
import image2 from '../images/carousel-slider/3.png';
import image3 from '../images/carousel-slider/1.png';
import image4 from '../images/carousel-slider/4.png';
import image5 from '../images/carousel-slider/6.png';

const infos = [
  {
    image: image1,
    linkk:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/infographics/Competitive%20Programming_WiT.pdf',
    desc: 'Competitive Programming',
  },
  {
    image: image2,
    linkk:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/infographics/Cyber%20Security_WiT.pdf',
    desc: 'Cyber Security',
  },
  {
    image: image3,
    linkk:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/infographics/FRONT_WEB_DEVELOPMENT_101.pdf',
    desc: 'FRONTEND Development',
  },
  {
    image: image4,
    linkk:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/infographics/Open%20Source%20Projects_WiT.pdf',
    desc: 'Open Source Projects',
  },
  {
    image: image5,
    linkk:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/infographics/Software%20Engineering_WiT.pdf',
    desc: 'Software Engineering',
  },
];

export default function infographics() {
  return (
    <div className="about">
      {/* <Header /> */}
      <CarouselComponent />
      {infos.map((a, i) => (
        <Card className="mycard">
          <CardContent className="mycard-inner">
            <div className="teams-name">
              <img src={a.image} style={{ width: '50%' }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="main-time-div">
              <div>
                <h4 className="has">{a.desc}</h4>
                <a href={a.linkk} style={{ color: 'blue' }} target="_blank">
                  {' '}
                  Read More
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {/* <Footer /> */}
    </div>
  );
}
