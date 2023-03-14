import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  console.log('hello');
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
