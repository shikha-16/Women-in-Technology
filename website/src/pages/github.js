import React from 'react';
import Header from '../components/Header/Header';
import Githubcomponent from '../components/Githubcomponent/Githubcomponent.js';
import Footer from '../components/Footer/Footer';

import './resources.css';

export default function GithubPage() {
  return (
    <div className="about">
      {/* <Header /> */}
      <Githubcomponent />
      {/* <Footer /> */}
    </div>
  );
}
