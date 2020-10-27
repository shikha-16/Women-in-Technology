import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
  image,
  title,
  description,
  link,
  alt,
  idx,
  isBig,
}) {
  return (
    <div className={`card-block ${isBig && 'card-block--big'}`}>
      <img
        className={`card-block__img ${isBig && 'card-block__img--big'}`}
        src={image}
        alt={alt}
      />
      <div className="card-block__body">
        <div>
          <h6 className="card-block__title">{`${title}-${idx}`}</h6>
          <p className="card-block__desc">{description}</p>
        </div>
        <a className="card-block__desc" href={link}>
          See More {'>'}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  idx: PropTypes.string,
  isBig: PropTypes.bool,
};
