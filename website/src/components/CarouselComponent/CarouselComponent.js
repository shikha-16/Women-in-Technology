import React from "react";

import "./carousel.css";

import slide1 from "../../images/carousel/carousel1.png";
import slide2 from "../../images/carousel/carousel2_2.png";
import slide3 from "../../images/carousel/carousel3_2.png";
import slide4 from "../../images/carousel/carousel4_2.png";

export default function ControlledCarousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <a href="https://github.com/ossu/computer-science">
            <img src={slide3} className="d-block w-100" alt="..." />
          </a>
        </div>
        <div className="carousel-item">
          {/*removed id="logss" because it was causing first image to
            become small
          */}
          <img src={slide4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// <div>
//   <div
//     style={{
//       marginBottom: '50px',
//       marginTop: '50px',
//       marginLeft: '10%',
//       marginRight: '50px',
//       paddingTop: '50px',
//       width: '80%',
//       height: '80%',
//       justifyContent: 'center',
//     }}
//     id="carouselInterval"
//     className="carousel slide"
//     data-ride="carousel"
//   >
//     <div className="carousel-inner">
//       <div
//         className="carousel-item active"
//         data-interval="1500"
//         data-target="#carouselInterval"
//       >
//         <img src={slide1} className="d-block w-100" alt="..." />
//       </div>
//       <div
//         className="carousel-item"
//         data-interval="1500"
//         data-target="#carouselInterval"
//       >
//         <img src={slide2} className="d-block w-100" alt="..." />
//       </div>
//       <div
//         className="carousel-item"
//         data-interval="2000"
//         data-target="#carouselInterval"
//       >
//         <img src={slide3} className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <a
//       className="carousel-control-prev"
//       href="#carouselInterval"
//       role="button"
//       data-slide="prev"
//     >
//       <span className="carousel-control-prev-icon" aria-hidden="true" />
//       <span className="sr-only">Previous</span>
//     </a>
//     <a
//       className="carousel-control-next"
//       href="#carouselInterval"
//       role="button"
//       data-slide="next"
//     >
//       <span className="carousel-control-next-icon" aria-hidden="true" />
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// </div>
//     <Carousel
//     showArrows={true}
//     infiniteLoop={true}
//     showThumbs={false}
//     showStatus={false}
//     autoPlay={true}
//     interval={1600}
//   >
//     <div className="myCarousel1">
//       <img src={slide1}/>

//     </div>

//     <div className="myCarousel1">
//       <img src={slide2}/>

//     </div>

//     <div className="myCarousel1">
//       <img src={slide3}/>

//     </div>

//   </Carousel>
//   );
// }
