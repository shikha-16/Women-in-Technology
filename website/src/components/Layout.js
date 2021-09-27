import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout(props) {
  return (
    <div>
      {/* <Header /> */}
      <div>{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
