import React from 'react';
import Footer from '../components/Footer';
import Monetization from '../components/Monetization';
import Navbar from '../components/Navbar';
import RC1Section from '../components/RC1Section';
import Temp_Content from '../components/Temp_Content';

function Temple() {
  return (
    <div>
      <Navbar />
      <Temp_Content />
      <RC1Section />
      <Monetization />
      <Footer />
    </div>
  )
}

export default Temple
