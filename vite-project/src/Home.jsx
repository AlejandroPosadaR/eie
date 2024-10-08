import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Vision from './Mission';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Vision/>
      <Services/>
      <Products/>
      <Contact/>
      {/*<Footer/>*/}
    </>
  );
}

export default Home;
