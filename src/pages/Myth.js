import React from 'react';
import Myth_Content from '../components/Myth_Content';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import RTSection from '../components/RTSection';
import Monetization from '../components/Monetization';
function Myth() {
  return (
    <div>
      <Navbar />
      <Myth_Content />
      <RTSection />
      <Monetization />
      <Footer />
    </div>
  )
}

export default Myth
