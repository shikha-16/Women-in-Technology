import React from "react";
import PropTypes from "prop-types";

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
