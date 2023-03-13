import React from 'react';

const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        <img src={require('../images/pngegg.png')} className="avatar" alt="" />
        <h3 className="hero-title">It's not a bug; it's an undocumented feature</h3>
      </div>
    </section>
  );
};

export default Hero;
