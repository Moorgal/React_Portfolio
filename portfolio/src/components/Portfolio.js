import React from 'react';
import { projects } from '../database';

const Portfolio = () => {
  return (
    <section className="section" id="work">
      <section className="section-center">
        <div className="section-title">
          <h2>Work</h2>
        </div>
        <div className="section-article">
          {projects.map((link) => {
            return (
              <a key="link.id" href={link.href} target="_blank" rel="noreferrer" className={link.hrefClass}>
                <div>
                  <div className="work-container">
                    <div className={link.hrefClass}>
                      <h3>{link.title}</h3>
                      <p>{link.text}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
