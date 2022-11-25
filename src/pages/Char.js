import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Monetization from '../components/Monetization';
import RTSection from '../components/RTSection';
import Char_Content from '../components/Char_Content';

function Char() {
  return (
    <div>
      <Navbar />
      <Char_Content />
      <RTSection />
      <Monetization />
      <Footer />
    </div>
  )
}

export default Char
