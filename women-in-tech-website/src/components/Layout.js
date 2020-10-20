import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      <div style={{'margin-top': '5rem;'}}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout

