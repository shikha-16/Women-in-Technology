import React from 'react';
import Header from '../components/Header/Header';
import ArticlesComponent from '../components/Articles/Articles';
import Footer from '../components/Footer/Footer';

import './resources.css';

export default function ArticlesPage() {
  return (
    <div className="about">
      {/* <Header /> */}
      <ArticlesComponent />
      {/* <Footer /> */}
    </div>
  );
}
