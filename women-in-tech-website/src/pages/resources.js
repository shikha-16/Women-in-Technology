import React from "react";
import Header from "../components/Header";
import CarouselComponent from "../components/CarouselComponent";
import ResourcesComponent from "../components/resourcesComponent/resourcesComponent";
import Footer from "../components/Footer";

import "./resources.css";

export default function ResourcesPage() {
  return (
    <div className="about">
      <Header />
      <div className="resources-page">
        <div class="card about-page">
          <h5 class="card-title">About Resources</h5>
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <CarouselComponent />
      <ResourcesComponent />
      <Footer />
    </div>
  );
}
