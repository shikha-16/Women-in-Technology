import React from 'react'
// import Header from '../components/Header/Header';
import ResourcesComponent from '../components/Resources/resourcesComponent'
// import Footer from '../components/Footer/Footer';
import ComputerScienceSection from '../components/ComputerScienceSection'

import './resources.css'

export default function ResourcesPage() {
  return (
    <div className="about">
      <div className="pt-5">
        <ComputerScienceSection />
      </div>

      <ResourcesComponent />
      
    </div>
  )
}
