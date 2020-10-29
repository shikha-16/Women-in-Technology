import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ComputerScienceSection.css';

import CarouselCards from '../CarouselCards';
import image from '../../images/code-example.jpg';

const cards = Array(24).fill({
  title: 'Web Development',
  description: 'Web Development is too cool for life',
  link: 'https://women-in-tech.com/',
  alt: 'web-development',
  image,
});

export default function ComputerScienceSection() {
  return (
    <div className="container">
      <div className="background-image">
        <div className="grey-block p-4 text-left">
          <h3 className="grey-block__heading mb-3">
            The World of Computer Science
          </h3>
          <p className="grey-block__text">
            Computer Science is Awesome Get Started with Computer Science Now!!!
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-3 mt-3">Explore Yourself in the World Of CS</h3>
        <div className="row mb-3 justify-content-center">
          <div className="col">
            <CarouselCards cards={cards} name="cs-carousel" />
          </div>
        </div>
      </div>
    </div>
  );
}
