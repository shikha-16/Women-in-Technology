import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img from "./Img.jsx";
import Content from "./Content.jsx";

const ReactBootstrapCarousel = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      style={{
        width: "100%"
      }}
    >
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item style={{ backgroundColor: "gray" }}>
          <Img img="" alt="First Slide" />
          <Carousel.Caption>
            <Content
              heading="First Slide Label"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "gray" }}>
          <Img img="" alt="Second Slide" />

          <Carousel.Caption>
            <Content
              heading="First Slide Label"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "gray" }}>
          <Img img="" alt="Third Slide" />

          <Carousel.Caption>
            <Content
              heading="First Slide Label"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "gray" }}>
          <Img img="" alt="Fourth Slide" />

          <Carousel.Caption>
            <Content
              heading="First Slide Label"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ReactBootstrapCarousel;
