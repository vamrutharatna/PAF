import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Monetization from '../components/Monetization';
import RC1Section from '../components/RC1Section';
import Fest_Content from '../components/Fest_Content';

function Fest() {
  return (
    <div>
      <Navbar />
      <Fest_Content />
      <RC1Section />
      <Monetization />
      <Footer />
    </div>
  )
}

export default Fest
