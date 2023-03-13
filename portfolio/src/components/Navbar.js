import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <span>Peter</span> Bokor
      </h1>
      <nav className="header-navbar">
        <p>
          <a href="#about" className="nav-link">
            about me
          </a>
        </p>
        <p>
          <a href="#work" className="nav-link">
            work
          </a>
        </p>
        <p>
          <a href="#contact" className="nav-link">
            contact me
          </a>
        </p>
        <p>
          <a href="#home" className="nav-link">
            resume
          </a>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
