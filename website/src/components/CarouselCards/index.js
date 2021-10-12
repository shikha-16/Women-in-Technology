import React, { useMemo, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import control from "../../images/others/control.png";
import "./CarouselCards.css";
import Card from "../Card/index";

export default function CarouselCards({ cards, name }) {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setContainerDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }

    if (containerRef?.current) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsOnSlide =
    Math.floor(containerDimensions.width / 280) > 2
      ? 2
      : Math.floor(containerDimensions.width / 280) || 1;

  const cardsBySlides = useMemo(
    () =>
      cards.reduce((acc, card, i) => {
        const idx = Math.floor(i / cardsOnSlide);
        if (acc[idx]) {
          acc[idx].push(card);
        } else {
          acc[idx] = [card];
        }
        return acc;
      }, []),
    [cards, cardsOnSlide]
  );

  return (
    <div
      id={name}
      className="carousel slide carousel-multi-item"
      data-bs-ride="carousel"
    >
      <div className="container-carousel">
        <a
          className="btn-floating control-btn control-btn--left"
          href={`#${name}`}
          data-bs-slide="prev"
        >
          <img src={control} alt="carousel control left" />
        </a>
        <a
          className="btn-floating control-btn control-btn--right"
          href={`#${name}`}
          data-bs-slide="next"
        >
          <img src={control} alt="carousel control left" />
        </a>
        <div className="carousel-inner" role="listbox" ref={containerRef}>
          {cardsBySlides.map((cardsSlide, i) => (
            <div
              key={`carousel-item-${i}`}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <div
                className="row justify-content-center"
                style={{ flexWrap: "nowrap" }}
              >
                {cardsSlide.map(
                  ({ image, title, description, link, alt }, j) => (
                    <div key={`${title}-${j}`} className="col rounded border border-dark m-3 py-4">
                      <Card
                        image={image}
                        title={title}
                        // description={description}
                        link={link}
                        alt={alt}
                        idx={`${i}-${j}`}
                        className=""
                        
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CarouselCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      alt: PropTypes.string,
      /*changed description prop to not required since description props
      is not passed */
      description: PropTypes.string,
      link: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string.isRequired,
};
