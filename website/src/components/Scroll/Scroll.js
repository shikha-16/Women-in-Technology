import React, { useState, useEffect } from 'react';
import './Scroll.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <button
          type="button"
          className="btn btn-primary toTop"
          onClick={scrollToTop}
        >
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

export default Scroll;
