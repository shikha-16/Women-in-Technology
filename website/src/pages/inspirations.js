import React from "react";

import CarouselComponent from "../components/CarouselComponent/CarouselComponent";

import Inspirational from "../components/Inspirational/Inspirational";

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
