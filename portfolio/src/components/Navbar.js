import React from 'react';
import { siteLinks } from '../database';

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="header-logo">
        <span>Peter</span> Bokor
      </h1>
      <nav className="header-navbar">
        {siteLinks.map((link) => {
          return (
            <p key="link.id">
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </p>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
