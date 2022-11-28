import React from 'react';
import Carousel from '../components/Herosection';
import Navbar from '../components/Navbar';
import Category from '../components/Category'
import Trending from '../components/Trending';
import TopMatch from '../components/TopMatch';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Category />
      <Trending />
      <TopMatch />
      <Footer />
      
    </div>
  )
}

export default Home
