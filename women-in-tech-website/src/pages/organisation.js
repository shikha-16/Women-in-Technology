import React from "react";
import Header from "../components/Header";
import CarouselComponent from "../components/CarouselComponent";
import OrganisationComponent from "../components/organisationComp/organistaionComponent";
import Footer from "../components/Footer";

export default function ScholarshipPage() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <OrganisationComponent />
      <Footer />
    </div>
  );
}
