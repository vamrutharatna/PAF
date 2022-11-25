import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Episode from '../components/Episode';
import RSSection from '../components/RSSection';

function Story() {
  return (
    <div>
        <Navbar />
        <Episode />
        <RSSection />
        <Footer />
    </div>
  )
}

export default Story
