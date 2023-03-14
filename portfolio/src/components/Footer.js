import React from 'react';

const Footer = () => {
  return (
    <section className="section" id="contact">
      <section className="section-center">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="footer-navbar">
          <p>07871856</p>
          <p>
            <a href="mailto:mail@mail" className="nav-link">
              mail
            </a>
          </p>
          <p>
            <a href="https://github.com/Moorgal" className="nav-link">
              Github
            </a>
          </p>
          <p>
            <a href="https://LinkedIn.com" className="nav-link">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://facebook.com" className="nav-link">
              Facebook
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Footer;
