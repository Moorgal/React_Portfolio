import React from 'react';
import { socialLinks } from '../database';
const Footer = () => {
  return (
    <section className="section" id="contact">
      <section className="section-center">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="footer-navbar">
          {socialLinks.map((link) => {
            return (
              <p key="link.id">
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </p>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Footer;
