import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ComputerScienceSection.css';

import CarouselCards from '../CarouselCards/index';
import image1 from '../../images/carousel-slider/1.png';
import image2 from '../../images/carousel-slider/2.png';
import image3 from '../../images/carousel-slider/3.png';
import image4 from '../../images/carousel-slider/4.png';
import image5 from '../../images/carousel-slider/5.png';
import image6 from '../../images/carousel-slider/6.png';
import image7 from '../../images/carousel-slider/image7.jpg';
import image8 from '../../images/carousel-slider/8.png';
import image9 from '../../images/carousel-slider/9.jpg';

const cards = [
  // {
  //   link: 'https://github.com/sindresorhus/awesome#front-end-development',
  //   alt: 'web-development',
  //   image: image9,
  // },
  {
    link: 'https://github.com/durul/The-Ultimate-List-of-App-Development',
    alt: 'Mobile-development',
    image: image2,
    title: 'Mobile-development',
  },
  {
    link:
      'https://medium.com/swlh/the-complete-beginners-guide-to-big-data-in-2018-82ed7a396ba3',
    alt: 'web-development',
    image: image3,
    title: 'Web-development',
  },
  {
    link: 'https://github.com/sindresorhus/awesome#back-end-development',
    alt: 'web-development',
    image: image1,
    title: 'Back-end-development',
  },
  {
    link:
      'https://github.com/shikha-16/Women-in-Technology/blob/master/documents/info/pdf/Competitive%20Programming%20(1).pdf',
    alt: 'Competitive programming',
    image: image4,
    title: 'Competitive programming',
  },
  {
    link: 'https://opensource.guide/how-to-contribute/',
    alt: 'Open Source',
    image: image5,
    title: 'Open Source',
  },
  {
    link: 'https://github.com/fabacab/awesome-cybersecurity-blueteam#readme',
    alt: 'Cyber Security',
    image: image6,
    title: 'Cyber Security',
  },
  // {
  //   link: 'https://atozofai.withgoogle.com/intl/en-GB/',
  //   alt: 'Ml/AI',
  //   image: image8,
  // },
];

export default function ComputerScienceSection() {
  return (
    <div className="container">
      <div className="background-image">
        <div className="grey-block">
          <h3 className="grey-block__heading mb-2">
            The World of Computer Science
          </h3>
          <p className="grey-block__text">
            Computer Science is Awesome Get Started with Computer Science Now!!!
          </p>
        </div>
      </div>
      <br />
      <div>
        <h3 className="mb-3 mt-3">Explore Yourself in the World Of CS</h3>
        <div
          className="row mb-3 justify-content-center"
          style={{ marginTop: '20px' }}
        >
          <div className="col">
            <CarouselCards cards={cards} name="cs-carousel" />
          </div>
        </div>
      </div>
    </div>
  );
}
