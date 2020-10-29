import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

import image from '../images/woman-and-laptop.jpg';
import Layout from '../components/Layout';
import CarouselComponent from '../components/CarouselComponent';
import Divider from '../components/Divider';
import ComputerScienceSection from '../components/ComputerScienceSection';
import Founder from '../components/Founder';
import CarouselCards from '../components/CarouselCards';

const organisationCards = Array(24).fill({
  title: 'Organisations',
  description: 'Organisation details text',
  link: 'https://women-in-tech.com/',
  alt: 'organisations',
  image,
});

const scholarshipCards = Array(24).fill({
  title: 'Scholarship',
  description: 'Scholarship Details Text',
  link: 'https://women-in-tech.com/',
  alt: 'organisations',
  image,
});

const inspirationCards = Array(24).fill({
  title: 'Inspiration',
  description: 'Inspiration Details Text',
  link: 'https://women-in-tech.com/',
  alt: 'organisations',
  image,
});

export default function IndexPage() {
  return (
    <Layout>
      <CarouselComponent />
      <div className="container">
        <div
          className="row"
          style={{
            padding: '48px 28px 81px 55px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '48px',
            lineHeight: '56px',
          }}
        >
          Hey there! 👩This repository is for storing everything any girl would
          look for or need while on their journey in the field of Computer
          Science. I'm hoping this will help all the girls across the world and
          encourage them to pursue the field further. If you want to explore the
          world of Computer Science, this is the place to be! Explore the
          contents of this repository by going through the table of contents
          given below. ✨
        </div>
      </div>
      <Divider />
      <ComputerScienceSection />
      <Divider />
      <Founder />
      <Divider />
      <div className="container">
        <h3
          style={{ fontFamily: 'Roboto', fontSize: '46px', lineHeight: '56px' }}
          className="mb-3 mt-3"
        >
          Organisations Promoting Women in Tech
        </h3>
        <p
          style={{ fontFamily: 'Roboto', fontSize: '30px', lineHeight: '35px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <div className="row mb-3 justify-content-center">
          <div className="col">
            <CarouselCards
              cards={organisationCards}
              name="organisation-carousel"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="container">
        <h3
          style={{ fontFamily: 'Roboto', fontSize: '46px', lineHeight: '56px' }}
          className="mb-3 mt-3"
        >
          Scholarships for Women in Tech
        </h3>
        <p
          style={{ fontFamily: 'Roboto', fontSize: '30px', lineHeight: '35px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <div className="row mb-3 justify-content-center">
          <div className="col">
            <CarouselCards
              cards={scholarshipCards}
              name="scholarship-carousel"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="container">
        <h3
          style={{ fontFamily: 'Roboto', fontSize: '46px', lineHeight: '56px' }}
          className="mb-3 mt-3"
        >
          Inspirations from Women in Tech
        </h3>
        <p
          style={{ fontFamily: 'Roboto', fontSize: '30px', lineHeight: '35px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <div className="row mb-3 justify-content-center">
          <div className="col">
            <CarouselCards
              cards={inspirationCards}
              name="inspiration-carousel"
            />
          </div>
        </div>
      </div>
      <Divider />
    </Layout>
  );
}
