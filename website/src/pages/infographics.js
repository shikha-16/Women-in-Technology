import React from "react";
import { Card, CardContent, Divider } from "@material-ui/core";

import CarouselComponent from "../components/CarouselComponent/CarouselComponent";

import "./infographics.css";

import pdf1 from "../pdf/Competitive Programming_WiT.pdf";
import pdf2 from "../pdf/Cyber Security_WiT.pdf";
import pdf3 from "../pdf/FRONT_WEB_DEVELOPMENT_101.pdf";
import pdf4 from "../pdf/Open Source Projects_WiT.pdf";
import pdf5 from "../pdf/Software Engineering_WiT.pdf";

import image1 from "../images/carousel-slider/5.png";
import image2 from "../images/carousel-slider/3.png";
import image3 from "../images/carousel-slider/1.png";
import image4 from "../images/carousel-slider/4.png";
import image5 from "../images/carousel-slider/6.png";

const infos = [
  {
    image: image1,
    linkk: pdf1,
    desc: "Competitive Programming",
  },
  {
    image: image2,
    linkk: pdf2,
    desc: "Cyber Security",
  },
  {
    image: image3,
    linkk: pdf3,
    desc: "FRONTEND Development",
  },
  {
    image: image4,
    linkk: pdf4,
    desc: "Open Source Projects",
  },
  {
    image: image5,
    linkk: pdf5,
    desc: "Software Engineering",
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
              <img src={a.image} alt="" />
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="main-time-div">
              <div>
                <h4 className="has">{a.desc}</h4>
                <a
                  href={a.linkk}
                  style={{ color: "blue" }}
                  target="_blank"
                  rel="noreferrer noopener"
                  download
                >
                  {" "}
                  Download Pdf
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