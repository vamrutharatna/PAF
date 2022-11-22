import React from 'react';
import Episode_Content from '../components/Episode_Content';
import Monetization from '../components/Monetization';
import Navbar from '../components/Navbar';
import RC2Section from '../components/RC2Section';
import Footer from '../components/Footer'

function Episodes() {
  return (
    <div>
      <Navbar />
      <Episode_Content />
      <RC2Section />
      <Monetization />
      <Footer />
    </div>
  )
}

export default Episodes
