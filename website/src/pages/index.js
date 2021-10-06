import React from 'react';
import './infocard.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleUp,
  faBookOpen,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import './index.css';
import CarouselComponent from '../components/CarouselComponent/CarouselComponent';
import Divider from '../components/Divider';
// import ComputerScienceSection from '../components/ComputerScienceSection';

export default function IndexPage() {
  return (
    <Layout>
      <div>
        <CarouselComponent />
      </div>
      <div className="container">
        <div className="rowss">
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
      {/* <ComputerScienceSection />
      <Divider /> */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ textAlign: 'center' }} className="h33">
          Why Women In Technology?
        </h3>

        <div className="roww">
          <div className="columnn">
            <div className="wrapper1">
              <div className="cardd1">
                <div className="card-info1">
                  <FontAwesomeIcon
                    icon={faAngleDoubleUp}
                    className="icon-icon"
                  />
                  <h3 style={{ textAlign: 'center' }}>Mission</h3>
                  <p>
                    Increase accessibility to resources & opportunities and
                    create a strong support system for women in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columnn">
            <div className="wrapper1">
              <div className="cardd1">
                <div className="card-info1">
                  <FontAwesomeIcon icon={faBookOpen} className="icon-icon" />
                  <h3 style={{ textAlign: 'center' }}>Value</h3>
                  <p>
                    Inclusion and promotion of diversity in the computing field
                    to empower under-represented communities and bring new
                    perspectives to light.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="columnn">
            <div className="wrapper1">
              <div className="cardd1">
                <div className="card-info1">
                  <FontAwesomeIcon icon={faIdBadge} className="icon-icon" />
                  <h3 style={{ textAlign: 'center' }}>Vision</h3>
                  <p>
                    A large and strong community of women who uplift, encourage
                    and support each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
