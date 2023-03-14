import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';

function App() {
  console.log('hello');
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
    </>
  );
}

export default App;
