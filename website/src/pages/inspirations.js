import React from 'react';
import Header from '../components/Header/Header';
import CarouselComponent from '../components/CarouselComponent/CarouselComponent';
import Footer from '../components/Footer/Footer';
import Inspirational from '../components/Inspirational/Inspirational';

export default function inspirations() {
  return (
    <div className="about">
      {/* <Header /> */}
      <div className="resources-page" />
      <CarouselComponent />
      <Inspirational />
      {/* <Footer /> */}
    </div>
  );
}
