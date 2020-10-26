import React, { useMemo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import control from '../../images/control.png';
import './CarouselCards.css';
import Card from '../Card';

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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsOnSlide =
    Math.floor(containerDimensions.width / 280) > 4
      ? 4
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
    [cardsOnSlide]
  );

  return (
    <div
      id={name}
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <div className="container-carousel">
        <a
          className="btn-floating control-btn control-btn--left"
          href={`#${name}`}
          data-slide="prev"
        >
          <img src={control} alt="carousel control left" />
        </a>
        <a
          className="btn-floating control-btn control-btn--right"
          href={`#${name}`}
          data-slide="next"
        >
          <img src={control} alt="carousel control left" />
        </a>
        <div className="carousel-inner" role="listbox" ref={containerRef}>
          {cardsBySlides.map((cardsSlide, i) => (
            <div
              key={`carousel-item-${i}`}
              className={`carousel-item ${i === 0 ? 'active' : ''}`}
            >
              <div
                className="row justify-content-center"
                style={{ flexWrap: 'nowrap' }}
              >
                {cardsSlide.map(
                  ({ image, title, description, link, alt }, j) => (
                    <div key={`${title}-${j}`} className="col">
                      <Card
                        image={image}
                        title={title}
                        description={description}
                        link={link}
                        alt={alt}
                        idx={`${i}-${j}`}
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
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string.isRequired,
};
